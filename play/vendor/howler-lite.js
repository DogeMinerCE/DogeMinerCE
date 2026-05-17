// Lightweight Howler fallback so the game boots even when the CDN is unavailable.
(function attachHowlerLite(globalScope) {
    if (globalScope.Howl) {
        return;
    }

    class HowlLite {
        constructor(options = {}) {
            this._options = { ...options };
            this._volume = typeof options.volume === 'number' ? options.volume : 1;
            this._loop = !!options.loop;
            this._playing = false;
            this._soundId = Math.random().toString(36).slice(2);
        }

        play() {
            this._playing = true;
            const { onplay, onend } = this._options;
            if (typeof onplay === 'function') {
                try {
                    onplay();
                } catch (error) {
                    console.warn('Howler fallback onplay handler failed', error);
                }
            }

            if (!this._loop && typeof onend === 'function') {
                setTimeout(() => {
                    this._playing = false;
                    try {
                        onend();
                    } catch (error) {
                        console.warn('Howler fallback onend handler failed', error);
                    }
                }, 0);
            }

            return this._soundId;
        }

        stop() {
            this._playing = false;
            return this;
        }

        pause() {
            this._playing = false;
            return this;
        }

        playing() {
            return this._playing;
        }

        volume(level) {
            if (typeof level === 'number') {
                this._volume = level;
            }
            return this._volume;
        }

        loop(enable) {
            if (typeof enable === 'boolean') {
                this._loop = enable;
            }
            return this._loop;
        }

        // Fallback stubs to avoid runtime errors when code expects these APIs.
        fade() { return this; }
        rate() { return 1; }
        unload() { return undefined; }
        on() { return this; }
        once() { return this; }
        off() { return this; }
        seek() { return 0; }
    }

    globalScope.Howl = HowlLite;
    globalScope.Howler = {
        volume: () => 1,
        mute: () => {},
        stop: () => {},
        ctx: null
    };
})(typeof window !== 'undefined' ? window : globalThis);
