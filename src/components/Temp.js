

// function Button({ onClick, children }) {
//   return <button onClick={onClick}>{children}</button>;
// }


function PlayButton({ movieName }) {
  function handlePlayClick() {
    alert(`Playing ${movieName}!`);
  }

  return <Button onClick={handlePlayClick}>Play "{movieName}"</Button>;
}




function UploadButton() {
  return <Button onClick={() => alert("Uploading!")}>Upload Image</Button>;
}

// export default UploadButton;


function Toolbar() {
  return (
    <div>
      <PlayButton movieName="Kiki's Delivery Service" />
      <UploadButton />
    </div>
  );
}

function Button({ onSmash, children }) {
  return (
    <button onClick={onSmash}>
      {children}
    </button>
  );
}

export default function App() {
  return (
    <div>
      <Button onSmash={() => alert('Playing!')}>
        Play Movie
      </Button>
      <Button onSmash={() => alert('Uploading!')}>
        Upload Image
      </Button>
    </div>
  );
}


