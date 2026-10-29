"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useLocale } from "@/components/locale-provider";
import { SpeakerIcon, StopIcon } from "@/components/icons";

const VOICE_LANG = "en-KE";
const RATE = 0.95;
const PITCH = 1.1;

export function VoiceTour() {
  const { t } = useLocale();
  const [speaking, setSpeaking] = useState(false);
  const [available, setAvailable] = useState(true);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      setAvailable(false);
      return;
    }

    const sync = () => setSpeaking(window.speechSynthesis.speaking);
    window.speechSynthesis.addEventListener?.("voicestatechanged", sync);

    return () => {
      window.speechSynthesis.removeEventListener?.("voicestatechanged", sync);
      window.speechSynthesis.cancel();
    };
  }, []);

  const stop = useCallback(() => {
    window.speechSynthesis.cancel();
    setSpeaking(false);
  }, []);

  const start = useCallback(() => {
    if (!("speechSynthesis" in window)) {
      setAvailable(false);
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(t.voice.script);
    utterance.lang = VOICE_LANG;
    utterance.rate = RATE;
    utterance.pitch = PITCH;

    const pickVoice = () => {
      const voices = window.speechSynthesis.getVoices();
      const match =
        voices.find((v) => v.lang.toLowerCase() === VOICE_LANG.toLowerCase()) ??
        voices.find((v) => v.lang.toLowerCase().startsWith("en"));
      if (match) utterance.voice = match;
    };
    pickVoice();

    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);

    utteranceRef.current = utterance;
    setSpeaking(true);
    window.speechSynthesis.speak(utterance);
  }, [t.voice.script]);

  if (!available) return null;

  return (
    <button
      type="button"
      onClick={speaking ? stop : start}
      aria-pressed={speaking}
      aria-label={speaking ? t.voice.stop : t.voice.start}
      title={speaking ? t.voice.stop : t.voice.start}
      className="fab fab-voice"
    >
      {speaking ? <StopIcon width={24} height={24} /> : <SpeakerIcon width={24} height={24} />}
      <span className="sr-only">{t.voice.label}</span>
    </button>
  );
}
