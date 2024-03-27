function TagText({arg}){
  if(Object.keys(arg).length === 0){
    return(<div className="list">
        <p>タグがありません</p>
    </div>)
  }else {
    return(<div className="list">
    {Object.keys(arg).map((key) => (
      <a
        key={key}
        data-active={key === currentTag}
        onClick={() => handleClickTag(key)}
      >
        {key}
      </a>
    ))}
  </div>)
  }
  
}
export default TagText;