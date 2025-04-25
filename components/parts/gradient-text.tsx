import GradientText from "@/text-animation/GradientText/GradientText";

export default function GradientTextContainer({ value }: { value: string }) {
  return (
    <GradientText
      colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
      animationSpeed={3}
      showBorder={false}
      className="custom-class"
    >
      {value}
    </GradientText>
  );
}
