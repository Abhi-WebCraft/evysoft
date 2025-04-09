export default function Tags({ tags }) {
  return (
    <div className="">
      <p className="mt-8 text-lg font-bold flex flex-wrap gap-3">
        <span>Tagged</span>
        {tags.edges.map((tag, index) => (
          <span key={index} className="font-normal border text-sm p-1 rounded text-red-600">
            {tag.node.name}
          </span>
        ))}
      </p>
    </div>
  );
}
