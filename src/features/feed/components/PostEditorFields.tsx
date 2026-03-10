interface PostEditorFieldsProps {
  idPrefix: string;
  title: string;
  content: string;
  onTitleChange: (value: string) => void;
  onContentChange: (value: string) => void;
}

const fieldBaseClassName =
  "w-full rounded-lg border border-[#777777] bg-white px-3 py-2 text-sm text-black outline-none placeholder:text-[#CCCCCC]";

export function PostEditorFields({
  idPrefix,
  title,
  content,
  onTitleChange,
  onContentChange,
}: PostEditorFieldsProps) {
  return (
    <div className="space-y-4">
      <div className="space-y-1.5">
        <label
          htmlFor={`${idPrefix}-title`}
          className="text-base font-normal leading-[19px] text-black"
        >
          Title
        </label>
        <input
          id={`${idPrefix}-title`}
          type="text"
          value={title}
          placeholder="Hello world"
          onChange={(event) => onTitleChange(event.target.value)}
          className={fieldBaseClassName}
        />
      </div>

      <div className="space-y-1.5">
        <label
          htmlFor={`${idPrefix}-content`}
          className="text-base font-normal leading-[19px] text-black"
        >
          Content
        </label>
        <textarea
          id={`${idPrefix}-content`}
          value={content}
          placeholder="Content here"
          onChange={(event) => onContentChange(event.target.value)}
          className={`${fieldBaseClassName} min-h-[74px] resize-none`}
        />
      </div>
    </div>
  );
}
