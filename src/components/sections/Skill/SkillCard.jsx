const SkillCard = ({ icon: Icon, title, skills }) => (
  <div className="bg-code-bg border-skill-border hover:border-primary/30 rounded-lg border p-6 shadow-sm transition-transform duration-300 hover:-translate-y-2 hover:shadow-md">
    <div className="mb-4 flex items-center gap-3">
      <div className="bg-primary/10 text-primary rounded-md p-2">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map(({ label, Icon }, index) => (
        <span
          key={index}
          className="border-outline bg-main-btn inline-flex items-center gap-2 rounded-md border px-2 py-1"
        >
          {Icon && <Icon className="h-4 w-4" />}
          {label}
        </span>
      ))}
    </div>
  </div>
);

export default SkillCard;
