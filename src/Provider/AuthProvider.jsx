import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from 'react';
import { app } from "../Components/Firebase/Firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import useAxiosPublic from "../Components/Hooks/useAxiosPublic/useAxiosPublic";

export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const axiosPublic = useAxiosPublic();

    /////////////////// user related state & function start /////////////////
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        setLoading(true)
        setWistList([])
        return signOut(auth)
    }
    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser),
                console.log('current user', currentUser)
            if (currentUser) {
                const userInfo = { email: currentUser.email };
                axiosPublic.post('jwt', userInfo)
                    .then((res) => {
                        if (res?.data?.token) {
                            localStorage.setItem('access-token', res?.data?.token)
                        }
                    })
            } else {
                localStorage.removeItem('access-token')
            }
            setLoading(false)
        })
        return () => {
            return unsubscribe();
        }
    }, [axiosPublic])
    /////////////// user related state & function End //////////////////



    ///////////// wishList product related state & function start///////// 


    const [wishProduct, setWishProduct] = useState([])
    const [wistList, setWistList] = useState([]);

    const fetchWishList = async () => {
        const userEmail = user?.email
        const response = await axiosPublic.get(`/wishlist/${userEmail}`);
        const data = response?.data?.products?.map(item => item?._id);;
        setWishProduct(response?.data?.products)
        setWistList(data);

    };
    useEffect(() => {
        fetchWishList();
    }, []);
    // wishList product related state & function end

    const authInfo = {
        user,
        loading,
        wishProduct,
        wistList,
        createUser,
        signIn,
        logOut,
        googleSignIn,
        setWishProduct,
        setWistList,
        fetchWishList
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;