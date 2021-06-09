import { useQuery } from "@apollo/client";
import { GET_CURRENT_USER } from "../graphql/queries";
import { User } from "../types/api";


type Data = {
    user: User;
};

const useCurrentUser = () => useQuery<Data>(GET_CURRENT_USER);

export default useCurrentUser;