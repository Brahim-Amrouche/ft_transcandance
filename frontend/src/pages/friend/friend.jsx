import Ura from 'ura';
import Navbar from '../utils/Navbar/Navbar.jsx';
import Swords from '../utils/Swords/Swords.jsx';
import WinCup from '../utils/WinCup/WinCup.jsx';
import Award from '../utils/Award/Award.jsx';
import Settings from './settings/settings.jsx';
import Play from '../utils/Play/Play.jsx';
import Chat from '../utils/Chat/Chat.jsx';

function Friend() {
  const [render, State] = Ura.init();
  const [getShow, setShow] = State(false);

  const [getList, setList] = State([
    { src: "/assets/003.png", title: "user 0" },
    { src: "/assets/003.png", title: "user 1" },
    { src: "/assets/003.png", title: "user 2" },
    { src: "/assets/003.png", title: "user 3" },
    { src: "/assets/003.png", title: "user 4" }
  ]);

  return render(() => (
    <div className="user">
      <Navbar />
      <div id="center" >
        <div className="user-card">
          <div className="img-container">
            <img src="/assets/profile.png" alt="" onclick={() => setShow(true)} />
          </div>
          <div className="name">
            <h3>Friend</h3>
          </div>
        </div>
      </div>
      <div id="bottom">
          <loop on={[Swords, Award, WinCup]} id="games">
            {(Elem)=>(
              <div id="history">
              <h4 id="title"><Elem />Games</h4>
              <div className="children">
                <div className="child"><o>42%</o><h4>Pongers</h4></div>
                <div className="child"><o>42%</o><h4>Pongers</h4></div>
              </div>
            </div>              
            )}
          </loop>
        <div id="friends">
          {/* <loop className="inner" on={getList()}>
            {(e, i) => (
              <div className="card" key={i}>
                <div className="content">
                  <div className="up">
                    <img src={e.src} onclick={()=> Ura.navigate("/friend")}/>
                    <h4>{e.title}</h4>
                  </div>
                  <div className="down">
                    <span onclick={() => Ura.navigate("/chat")} ><Chat/></span>
                    <span><Play/></span>
                  </div>
                </div>
              </div>
            )}
          </loop> */}
        </div>
      </div>
    </div>
  ));
}

export default Friend