import { Button } from "../../../components/Button";
import { Modal } from "./Modal";
import { PostEditorFields } from "./PostEditorFields";

interface EditPostModalProps {
  isOpen: boolean;
  title: string;
  content: string;
  isSaveDisabled: boolean;
  isSubmitting: boolean;
  onTitleChange: (value: string) => void;
  onContentChange: (value: string) => void;
  onCancel: () => void;
  onSave: () => void;
}

export function EditPostModal({
  isOpen,
  title,
  content,
  isSaveDisabled,
  isSubmitting,
  onTitleChange,
  onContentChange,
  onCancel,
  onSave,
}: EditPostModalProps) {
  return (
    <Modal isOpen={isOpen} panelClassName="max-w-[660px]">
      <h2 className="text-[22px] font-bold leading-[26px] text-black">Edit item</h2>

      <div className="mt-6">
        <PostEditorFields
          idPrefix="edit-post"
          title={title}
          content={content}
          onTitleChange={onTitleChange}
          onContentChange={onContentChange}
        />
      </div>

      <div className="mt-4 flex justify-end gap-4">
        <Button
          onClick={onCancel}
          variant="secondary"
          className="min-w-[120px]"
          disabled={isSubmitting}
        >
          Cancel
        </Button>
        <Button
          onClick={onSave}
          variant="success"
          className="min-w-[120px]"
          disabled={isSaveDisabled || isSubmitting}
        >
          {isSubmitting ? "Saving..." : "Save"}
        </Button>
      </div>
    </Modal>
  );
}
