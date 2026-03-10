import { Button } from "../../../components/Button";
import { PostEditorFields } from "./PostEditorFields";

interface PostComposerProps {
  title: string;
  content: string;
  isCreateDisabled: boolean;
  isSubmitting: boolean;
  onTitleChange: (value: string) => void;
  onContentChange: (value: string) => void;
  onCreate: () => void;
}

export function PostComposer({
  title,
  content,
  isCreateDisabled,
  isSubmitting,
  onTitleChange,
  onContentChange,
  onCreate,
}: PostComposerProps) {
  return (
    <section className="rounded-2xl border border-[#999999] bg-white p-6">
      <h2 className="text-[22px] font-bold leading-[26px] text-black">
        What&apos;s on your mind?
      </h2>

      <div className="mt-6">
        <PostEditorFields
          idPrefix="create-post"
          title={title}
          content={content}
          onTitleChange={onTitleChange}
          onContentChange={onContentChange}
        />
      </div>

      <div className="mt-4 flex justify-end">
        <Button
          disabled={isCreateDisabled || isSubmitting}
          onClick={onCreate}
          className="min-w-[120px]"
        >
          {isSubmitting ? "Creating..." : "Create"}
        </Button>
      </div>
    </section>
  );
}
