import Badge from "./components/Badge/Badge";
import Banner from "./components/Banner/Banner";
import Card from "./components/Card/Card";
import Testimonial from "./components/Testimonial/Testimonial";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

import "./App.css";

function App() {
  return (
    <>
      <div className="badge-container">
        <h2>Badges</h2>
        <div className="badge-variant-container">
          <Badge>Badge</Badge>

          <Badge color="red">Badge</Badge>

          <Badge color="yellow">Badge</Badge>

          <Badge color="green">Badge</Badge>

          <Badge color="blue">Badge</Badge>

          <Badge color="indigo">Badge</Badge>

          <Badge color="purple">Badge</Badge>

          <Badge color="pink">Badge</Badge>
        </div>

        <div className="badge-variant-container">
          <Badge variant="pill">Badge</Badge>

          <Badge color="red" variant="pill">
            Badge
          </Badge>

          <Badge color="yellow" variant="pill">
            Badge
          </Badge>

          <Badge color="green" variant="pill">
            Badge
          </Badge>

          <Badge color="blue" variant="pill">
            Badge
          </Badge>

          <Badge color="indigo" variant="pill">
            Badge
          </Badge>

          <Badge color="purple" variant="pill">
            Badge
          </Badge>

          <Badge color="pink" variant="pill">
            Badge
          </Badge>
        </div>
      </div>
      <div className="banner-container">
        <h2>Banners</h2>

        <div className="banner-variant-container">
          <Banner
            severity="success"
            title="Congratulations!"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
          />

          <Banner
            severity="warning"
            title="Attention"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
          />

          <Banner
            severity="error"
            title="There is a problem with your application"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
          />

          <Banner
            severity="neutral"
            title="Update available"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
          />
        </div>

        <div className="banner-variant-container">
          <Banner severity="success" title="Congratulations!" />

          <Banner severity="warning" title="Attention" />

          <Banner
            severity="error"
            title="There is a problem with your application"
          />

          <Banner severity="neutral" title="Update available" />
        </div>
      </div>
      <div className="card-container">
        <h2>Cards</h2>
        <div className="card-variant-container">
          <Card
            icon="cloud-arrow-up"
            title="Easy Deployment"
            description="Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis."
          />

          <Card
            icon="gears"
            color="#A9229B"
            title="Highly Configureable"
            description="Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis."
          />
        </div>
      </div>

      <div className="testimonial-container">
        <h2>Testimonials</h2>
        <Testimonial
          picture="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna
              nulla vitae laoreet augue. Amet feugiat est integer dolor auctor
              adipiscing nunc urna, sit."
          author="May Andersons"
          work="Workcation, CTO"
        />
      </div>
    </>
  );
}

export default App;
