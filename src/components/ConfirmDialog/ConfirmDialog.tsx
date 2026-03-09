interface Props {
  open: boolean
  onConfirm: () => void
  onCancel: () => void
}

const ConfirmDialog = ({ open, onConfirm, onCancel }: Props) => {
  if (!open) return null

  return (
    <div className="modal">
      <div className="modal-content">
        <p>Are you sure you want to delete?</p>

        <button onClick={onConfirm}>Yes</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  )
}

export default ConfirmDialog