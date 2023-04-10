import ComponentCarusel from "../Components/ComponentCarusel";
import TextOfLogo from "./textOfLogo";
import Work from "./Work";
import Reviews from "./Reviews";


function ContentBody() {
  return (
    <main>
      <TextOfLogo />
      <ComponentCarusel />
      <Work />
      <Reviews />
    </main >
  );
}

export default ContentBody;
