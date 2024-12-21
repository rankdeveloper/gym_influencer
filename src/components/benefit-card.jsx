export function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-[#090909] p-4 py-6 rounded-3xl hover:bg-[#1a1a1a] transition-colors">
      <div className="bg-[#1a1a1a] p-2 rounded-xl flex items-center w-fit justify-center mb-6">
        <img src={icon} alt={icon} className="w-8 h-8  object-cover " />
      </div>
      <h3 className="text-[#eb0000] text-xl font-bold mb-3 ">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed second">
        {description}
      </p>
    </div>
  );
}
