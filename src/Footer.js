const footer = ({length}) => {
  return (
      <footer>
          <p>
              {length} List {length === 1 ? "item" : "items"}
          </p>
    </footer>
  )
}

export default footer