type FocusGuardProps = {
  explanation?: string; // Optional explanation for ignoring linting rule
};

export default function FocusGuard({ explanation }: FocusGuardProps) {
  return (
    // biome-ignore lint/a11y/noAriaHiddenOnFocusable: <explanation>
    <div
      className="fixed top-px left-px h-0 w-px overflow-hidden p-0"
      data-focus-guard="true"
      // biome-ignore lint/a11y/noNoninteractiveTabindex: <explanation>
      tabIndex={0}
      data-aria-hidden="true"
      aria-hidden="true"
    >
      {explanation && `<!-- ${explanation} -->`}
    </div>
  );
}
