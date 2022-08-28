const saintSeiyaCardlist = ({chars}) => {
  return (
    <div>{chars.map(c => <li key={c.id}>{c.name}</li>)}</div>
  )
}
export default saintSeiyaCardlist