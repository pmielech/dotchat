


const ChatNavbar = ({ connStatus, setConStatus }) => {

  const returnHome = () => {
    if (connStatus) {
      setConStatus(false);
    }
  }


  return <nav class="navbar navbar-expand-lg navbar-dark bg-dark" style={{ color: "#171717" }} aria-label="Eighth navbar">
    <div class="container">
      <a class="navbar-brand" href="#">dotchat</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample07">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" onClick={returnHome} href="#">Home</a>
          </li>
          <li >
          </li>
          {/* <li class="nav-item"> */}
          {/*   <a class="nav-link" href="#">Link</a> */}
          {/* </li> */}
          {/* <li class="nav-item"> */}
          {/*   <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a> */}
          {/* </li> */}
          {/* <li class="nav-item dropdown"> */}
          {/*   <a class="nav-link dropdown-toggle" href="#" id="dropdown07" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a> */}
          {/*   <ul class="dropdown-menu" aria-labelledby="dropdown07"> */}
          {/*     <li><a class="dropdown-item" href="#">Action</a></li> */}
          {/*     <li><a class="dropdown-item" href="#">Another action</a></li> */}
          {/*     <li><a class="dropdown-item" href="#">Something else here</a></li> */}
          {/*   </ul> */}
          {/* </li> */}
        </ul>
        {/* <ul class="nav navbar-nav mx-auto"> */}
        {/*   <li class="nav-item"><a class="nav-link" href="#">{{ currentContext }}</a></li> */}
        {/* </ul> */}
        <form>
          <input class="form-control" type="text" placeholder="Search" aria-label="Search" />
        </form>
      </div>
    </div>
  </nav>
}

export default ChatNavbar;
