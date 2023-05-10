import { withAuth } from "../../hocs/withAuth";

const ProfilePage = () => {
  return <div>Page contact</div>;
};

export const Contact = withAuth(ProfilePage);
