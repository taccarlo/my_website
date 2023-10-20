function TopicList(props){
    const listTopics = props.list.map(item =>
        <li className="list-group-item" key={item.id}>
          <p><b>{item["title"]}</b> {item["description"]}</p>
        </li>
      )
    return <>
    <ul className="list-group" style={{maxHeight: 300, overflow: 'auto', padding:2}}>
        {listTopics}
    </ul></>;
}
export default TopicList;