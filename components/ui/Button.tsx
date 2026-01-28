export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="
      px-7 py-3 rounded-xl 
      bg-cyan-500/10 text-cyan-400 
      border border-cyan-400/40 
      hover:bg-cyan-400 hover:text-black 
      hover:shadow-[0_0_30px_rgba(34,211,238,0.9)]
      transition-all duration-300 font-medium tracking-wide
    ">
      {children}
    </button>
  );
}
