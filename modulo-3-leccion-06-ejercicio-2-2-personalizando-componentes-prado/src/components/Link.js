const Link = (props) => {
  console.log(props);
  const howToOpen = props.openInNewTab === true ? "_blank" : "";
  return (
    <li>
      <a
        className="nav_item"
        title={props.title}
        href={props.href}
        target={howToOpen}
      >
        {props.text}
      </a>
    </li>
  );
};
export default Link;
