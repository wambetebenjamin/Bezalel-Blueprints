"use client";

import Cookies from "js-cookie";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

const SAVED_COOKIE = "bezalel-blueprints-saved";
const CONTRIBUTIONS_KEY = "bezalel-blueprints-contributions";

export type Contribution = {
  title: string;
  date: string;
  status: "received" | "review" | "testing" | "published" | "changes";
};

type SavedListValue = {
  saved: string[];
  ready: boolean;
  toggle: (slug: string) => void;
  isSaved: (slug: string) => boolean;
  clear: () => void;
  contributions: Contribution[];
  addContribution: (title: string) => void;
  clearContributions: () => void;
};

const SavedListContext = createContext<SavedListValue | null>(null);

function readSaved(): string[] {
  try {
    const raw = Cookies.get(SAVED_COOKIE);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter((v) => typeof v === "string") : [];
  } catch {
    return [];
  }
}

function readContributions(): Contribution[] {
  try {
    if (typeof window === "undefined") return [];
    const raw = window.localStorage.getItem(CONTRIBUTIONS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as Contribution[]) : [];
  } catch {
    return [];
  }
}

export function SavedListProvider({ children }: { children: ReactNode }) {
  const [saved, setSaved] = useState<string[]>([]);
  const [contributions, setContributions] = useState<Contribution[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setSaved(readSaved());
    setContributions(readContributions());
    setReady(true);
  }, []);

  const toggle = useCallback((slug: string) => {
    setSaved((current) => {
      const next = current.includes(slug)
        ? current.filter((s) => s !== slug)
        : [slug, ...current];
      Cookies.set(SAVED_COOKIE, JSON.stringify(next), {
        expires: 365,
        sameSite: "Lax",
        path: "/",
      });
      return next;
    });
  }, []);

  const clear = useCallback(() => {
    setSaved([]);
    Cookies.set(SAVED_COOKIE, JSON.stringify([]), {
      expires: 365,
      sameSite: "Lax",
      path: "/",
    });
  }, []);

  const addContribution = useCallback((title: string) => {
    setContributions((current) => {
      const next: Contribution[] = [
        { title, date: new Date().toISOString().slice(0, 10), status: "received" },
        ...current,
      ];
      window.localStorage.setItem(CONTRIBUTIONS_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const clearContributions = useCallback(() => {
    setContributions([]);
    window.localStorage.removeItem(CONTRIBUTIONS_KEY);
  }, []);

  const value = useMemo<SavedListValue>(
    () => ({
      saved,
      ready,
      toggle,
      isSaved: (slug: string) => saved.includes(slug),
      clear,
      contributions,
      addContribution,
      clearContributions,
    }),
    [saved, ready, toggle, clear, contributions, addContribution, clearContributions],
  );

  return <SavedListContext.Provider value={value}>{children}</SavedListContext.Provider>;
}

export function useSavedList() {
  const ctx = useContext(SavedListContext);
  if (!ctx) {
    throw new Error("useSavedList must be used inside SavedListProvider");
  }
  return ctx;
}
