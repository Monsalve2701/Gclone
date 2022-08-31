import "./SidebarOption.css"

const SidebarOptions = ({ Icon, title, number, selected }) => {
  return (
    <div className={`sidebarOption ${selected && "sidebarOption--active"}`}>
        <Icon />
        <h3>{ title }</h3>
        <p className="number">{ number }</p>

    </div>
  )
}

export default SidebarOptions