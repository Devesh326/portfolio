"use client";

import { useEffect, useRef, useState } from "react";

type Pose = "idle" | "wave" | "strum";

const moments: { pose: Pose; message: string }[] = [
  { pose: "strum", message: "Hey, glad you stopped by! 🎸" },
  { pose: "wave", message: "Devesh builds useful products, from interface to infrastructure." },
  { pose: "strum", message: "Away from code? Probably guitar or table tennis." },
];

export function Mascot() {
  const [pose, setPose] = useState<Pose>("idle");
  const [message, setMessage] = useState<string | null>(null);
  const nextMoment = useRef(0);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function clearHideTimer() {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    hideTimer.current = null;
  }

  function close() {
    clearHideTimer();
    setMessage(null);
    setPose("idle");
  }

  function show(nextPose: Pose, nextMessage: string, duration: number) {
    clearHideTimer();
    setPose(nextPose);
    setMessage(nextMessage);
    hideTimer.current = setTimeout(() => {
      setMessage(null);
      setPose("idle");
      hideTimer.current = null;
    }, duration);
  }

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") close();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      clearHideTimer();
    };
  }, []);

  function greet() {
    if (message || !window.matchMedia("(hover: hover)").matches) return;
    show("wave", "Hey, glad you stopped by!", 2600);
  }

  function interact() {
    const moment = moments[nextMoment.current];
    nextMoment.current = (nextMoment.current + 1) % moments.length;
    show(moment.pose, moment.message, 5000);
  }

  return (
    <aside className="mascot" aria-label="Pixel robot companion">
      {message && (
        <div className="mascot-bubble" id="mascot-bubble" role="status" aria-live="polite">
          <p>{message}</p>
          <button type="button" onClick={close} aria-label="Close robot message">×</button>
        </div>
      )}
      <button
        className={`mascot-button mascot-${pose}`}
        type="button"
        aria-label="Say hello to Devesh's pixel robot"
        aria-expanded={Boolean(message)}
        aria-controls="mascot-bubble"
        onMouseEnter={greet}
        onFocus={greet}
        onClick={interact}
      >
        <span className="mascot-sprite" aria-hidden="true">
          {(["idle", "wave", "strum"] as const).map((frame) => (
            <img
              key={frame}
              src={`/mascot/${frame}.webp`}
              alt=""
              className={pose === frame ? "active" : ""}
              draggable={false}
              width="256"
              height="256"
            />
          ))}
        </span>
      </button>
    </aside>
  );
}
