type Props = {
  title: string;
  subtitle?: string;
};

export default function SectionTitle({ title, subtitle }: Props) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-2 text-gray-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}
