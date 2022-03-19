import Section from "./Section/Section";

const Navigation = ({ sections }) => {
  return(<nav>
    <ul>
      {sections.map(item => (<li>
          <Section
            title={item.title}
            pathname={item.pathname}
          />
        </li>))}
    </ul>
  </nav>)
}

export default Navigation;