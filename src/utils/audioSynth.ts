/**
 * Web Audio API Superbike Engine Sound Synthesizer
 * Generates high-rev engine roar for Inline-4, V4, and Crossplane engines.
 */

let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    audioCtx = new AudioContextClass();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

export function playEngineRev(engineType: 'INLINE_4' | 'V4' | 'CROSSPLANE_4' = 'INLINE_4') {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    // Base oscillator for engine rumble
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const subOsc = ctx.createOscillator();
    const gainNode = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    // Configure filter for deep exhaust roar
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(400, now);
    filter.frequency.exponentialRampToValueAtTime(2800, now + 0.6);
    filter.frequency.exponentialRampToValueAtTime(700, now + 1.4);

    let baseFreq = 90; // Inline 4
    if (engineType === 'V4') baseFreq = 75; // V4 growl
    if (engineType === 'CROSSPLANE_4') baseFreq = 82; // Crossplane rumble

    // Waveform setup
    osc1.type = 'sawtooth';
    osc2.type = 'square';
    subOsc.type = 'sawtooth';

    // Frequency sweep (Idle -> High RPM Rev -> Deceleration Pop)
    osc1.frequency.setValueAtTime(baseFreq, now);
    osc1.frequency.exponentialRampToValueAtTime(baseFreq * 5.2, now + 0.6);
    osc1.frequency.exponentialRampToValueAtTime(baseFreq * 1.5, now + 1.4);

    osc2.frequency.setValueAtTime(baseFreq * 1.5, now);
    osc2.frequency.exponentialRampToValueAtTime(baseFreq * 7.8, now + 0.6);
    osc2.frequency.exponentialRampToValueAtTime(baseFreq * 2.1, now + 1.4);

    subOsc.frequency.setValueAtTime(baseFreq / 2, now);
    subOsc.frequency.exponentialRampToValueAtTime(baseFreq * 2.6, now + 0.6);
    subOsc.frequency.exponentialRampToValueAtTime(baseFreq * 0.8, now + 1.4);

    // Gain envelope (Volume control)
    gainNode.gain.setValueAtTime(0.01, now);
    gainNode.gain.linearRampToValueAtTime(0.25, now + 0.1);
    gainNode.gain.linearRampToValueAtTime(0.35, now + 0.6);
    gainNode.gain.exponentialRampToValueAtTime(0.001, now + 1.5);

    // Connect nodes
    osc1.connect(filter);
    osc2.connect(filter);
    subOsc.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(ctx.destination);

    // Start & Stop
    osc1.start(now);
    osc2.start(now);
    subOsc.start(now);

    osc1.stop(now + 1.5);
    osc2.stop(now + 1.5);
    subOsc.stop(now + 1.5);

  } catch {
    // Fallback if audio context is blocked
  }
}

/**
 * Plays a 5-second high-tactile superbike hover rev sound effect.
 * Features 5 distinct RPM stages (idle -> initial throttle snap -> 14k RPM screamer -> double blip rev -> exhaust crackle deceleration)
 * Returns a handle with a stop() method for clean fade-out when mouse leaves.
 */
export function play5SecondHoverRev(engineType: 'INLINE_4' | 'V4' | 'CROSSPLANE_4' = 'INLINE_4') {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;
    const duration = 5.0;

    let baseFreq = 95; // Inline 4
    if (engineType === 'V4') baseFreq = 78;
    if (engineType === 'CROSSPLANE_4') baseFreq = 84;

    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const subOsc = ctx.createOscillator();
    const filter = ctx.createBiquadFilter();
    const masterGain = ctx.createGain();

    // Noise buffer for realistic exhaust airflow & decel crackle
    const bufferSize = ctx.sampleRate * duration;
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }
    const noiseSource = ctx.createBufferSource();
    noiseSource.buffer = noiseBuffer;

    const noiseFilter = ctx.createBiquadFilter();
    noiseFilter.type = 'bandpass';
    noiseFilter.frequency.setValueAtTime(1200, now);
    noiseFilter.frequency.exponentialRampToValueAtTime(3500, now + 2.5);
    noiseFilter.frequency.exponentialRampToValueAtTime(800, now + 4.8);
    noiseFilter.Q.value = 3.0;

    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.01, now);
    noiseGain.gain.linearRampToValueAtTime(0.08, now + 2.0);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 4.9);

    noiseSource.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(masterGain);

    // Filter setup for exhaust tone dynamics
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(350, now);
    filter.frequency.exponentialRampToValueAtTime(3200, now + 1.2);
    filter.frequency.exponentialRampToValueAtTime(1200, now + 2.2);
    filter.frequency.exponentialRampToValueAtTime(4500, now + 3.2);
    filter.frequency.exponentialRampToValueAtTime(500, now + 4.8);

    osc1.type = 'sawtooth';
    osc2.type = 'square';
    subOsc.type = 'sawtooth';

    // 5-second frequency trajectory
    // Osc1
    osc1.frequency.setValueAtTime(baseFreq, now);
    osc1.frequency.exponentialRampToValueAtTime(baseFreq * 5.5, now + 1.0);
    osc1.frequency.exponentialRampToValueAtTime(baseFreq * 2.8, now + 1.8);
    osc1.frequency.exponentialRampToValueAtTime(baseFreq * 8.5, now + 3.0);
    osc1.frequency.exponentialRampToValueAtTime(baseFreq * 4.0, now + 3.8);
    osc1.frequency.exponentialRampToValueAtTime(baseFreq * 1.1, now + 4.8);

    // Osc2 (Harmonic octave)
    osc2.frequency.setValueAtTime(baseFreq * 1.5, now);
    osc2.frequency.exponentialRampToValueAtTime(baseFreq * 8.0, now + 1.0);
    osc2.frequency.exponentialRampToValueAtTime(baseFreq * 4.0, now + 1.8);
    osc2.frequency.exponentialRampToValueAtTime(baseFreq * 12.0, now + 3.0);
    osc2.frequency.exponentialRampToValueAtTime(baseFreq * 5.5, now + 3.8);
    osc2.frequency.exponentialRampToValueAtTime(baseFreq * 1.6, now + 4.8);

    // SubOsc (Guttural low end rumble)
    subOsc.frequency.setValueAtTime(baseFreq / 2, now);
    subOsc.frequency.exponentialRampToValueAtTime(baseFreq * 2.5, now + 1.0);
    subOsc.frequency.exponentialRampToValueAtTime(baseFreq * 1.4, now + 1.8);
    subOsc.frequency.exponentialRampToValueAtTime(baseFreq * 4.0, now + 3.0);
    subOsc.frequency.exponentialRampToValueAtTime(baseFreq * 2.0, now + 3.8);
    subOsc.frequency.exponentialRampToValueAtTime(baseFreq / 2, now + 4.8);

    // Volume envelope over 5.0 seconds
    masterGain.gain.setValueAtTime(0.01, now);
    masterGain.gain.linearRampToValueAtTime(0.25, now + 0.3);
    masterGain.gain.linearRampToValueAtTime(0.35, now + 1.0);
    masterGain.gain.linearRampToValueAtTime(0.20, now + 1.8);
    masterGain.gain.linearRampToValueAtTime(0.40, now + 3.0); // Peak loudness
    masterGain.gain.linearRampToValueAtTime(0.25, now + 3.8);
    masterGain.gain.exponentialRampToValueAtTime(0.001, now + 4.95);

    osc1.connect(filter);
    osc2.connect(filter);
    subOsc.connect(filter);
    filter.connect(masterGain);
    masterGain.connect(ctx.destination);

    osc1.start(now);
    osc2.start(now);
    subOsc.start(now);
    noiseSource.start(now);

    osc1.stop(now + 5.0);
    osc2.stop(now + 5.0);
    subOsc.stop(now + 5.0);
    noiseSource.stop(now + 5.0);

    const stop = () => {
      try {
        const stopTime = ctx.currentTime;
        masterGain.gain.cancelScheduledValues(stopTime);
        masterGain.gain.setValueAtTime(masterGain.gain.value, stopTime);
        masterGain.gain.exponentialRampToValueAtTime(0.0001, stopTime + 0.2);
        setTimeout(() => {
          try {
            osc1.stop();
            osc2.stop();
            subOsc.stop();
            noiseSource.stop();
          } catch {
            // Already stopped
          }
        }, 220);
      } catch {
        // Ignore errors on premature stop
      }
    };

    return { stop };
  } catch {
    return { stop: () => {} };
  }
}

