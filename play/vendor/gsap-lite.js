// Minimal GSAP fallback keeps UI animations no-op when CDN assets are blocked.
(function attachGsapLite(globalScope) {
    if (globalScope.gsap) {
        return;
    }

    function scheduleCompletion(callback, durationSeconds) {
        if (typeof callback === 'function') {
            setTimeout(() => {
                try {
                    callback();
                } catch (error) {
                    console.warn('GSAP fallback completion callback failed', error);
                }
            }, Math.max(0, durationSeconds * 1000 || 0));
        }
    }

    function TimelineLite() {}

    TimelineLite.prototype.to = function timelineTo(targets, vars = {}) {
        scheduleCompletion(vars.onComplete, vars.duration);
        return this;
    };

    const gsapLite = {
        timeline() {
            return new TimelineLite();
        },
        to(targets, vars = {}) {
            scheduleCompletion(vars.onComplete, vars.duration);
            return targets;
        }
    };

    globalScope.gsap = gsapLite;
})(typeof window !== 'undefined' ? window : globalThis);
