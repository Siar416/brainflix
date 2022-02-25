function VideosArray(props) {
  console.log(props.data);

  return (
    <>
      {props.data.map((item) => (
        <>
          <h1>{item.title}</h1>
          <h1>{item.channel}</h1>
          <h1>{item.id}</h1>
          {/* <img src={item.image} /> */}
        </>
      ))}
    </>
  );
}

export default VideosArray;
