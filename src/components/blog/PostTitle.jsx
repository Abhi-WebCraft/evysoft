export default function PostTitle({ children }) {
  return (
    <h1
className="text-xl md:text-3xl lg:text-4xl font-bold hover:text-[#28aa4a] tracking-tighter leading-tight md:leading-none mb-8 text-center md:text-left transition duration-300 ease-in-out"
      dangerouslySetInnerHTML={{ __html: children }}
    />
  );
}
