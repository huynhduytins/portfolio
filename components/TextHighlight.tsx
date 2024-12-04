const TextHighlight = ({ text }: { text: string }) => {
  return (
    <span className="relative text-primary py-[2px] px-2 after:contents-[] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-accent after:rotate-[-2deg] after:z-[-1]">
      {text}
    </span>
  );
};

export default TextHighlight;
