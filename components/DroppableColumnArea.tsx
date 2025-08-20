const DroppableColumnAreas = ({
  children,
  isLoading,
}: {
  children: React.ReactNode
  isLoading: boolean
}) => {
  return (
    <div className="w-full lg:flex-shrink-0 lg:w-80">
      <div>
        {isLoading ? (
          <div>
            <h1>Skeletons</h1>
          </div>
        ) : (
          children
        )}
      </div>
    </div>
  )
}

export default DroppableColumnAreas
