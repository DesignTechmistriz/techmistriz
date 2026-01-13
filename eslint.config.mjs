import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

const Heading = () => {
  const ref = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const top = ref.current.getBoundingClientRect().top;
      if (top < window.innerHeight - 50) {
        ref.current.classList.add("show");
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <h2 ref={ref} className="fade-slide-up text-3xl md:text-4xl font-extrabold text-slate-900">
      Our Services
    </h2>
  );
};


export default eslintConfig;
