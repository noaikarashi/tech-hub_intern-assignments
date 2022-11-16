import React, { useEffect, useState } from "react";

/**
 * 簡易的な認証情報の型のサンプル
 */
type AuthInfo = {
    userId: string;
};

type MyComponenProps = {
    children: React.ReactNode;
};

// ログイン状態のContext
export const LoggedInContext = React.createContext<boolean>(false);

// 認証情報と認証情報セットのContext
export const AuthInfoContext = React.createContext<
    [AuthInfo, React.Dispatch<React.SetStateAction<AuthInfo>>]
>([{ userId: "" }, () => { }]);

function getDefaultAuthInfo(): AuthInfo {
    const defaultAuthInfo = window.localStorage.getItem("authInfo");
    if (defaultAuthInfo) {
        return JSON.parse(defaultAuthInfo) as AuthInfo;
    } else {
        return { userId: "" };
    }
}


function setAutoInfoToLocalStorage(authInfo: AuthInfo): void {
    const authInfoStringfy = JSON.stringify(authInfo);
    window.localStorage.setItem("authInfo", authInfoStringfy);
}

export const AuthContextProvider: React.FC<MyComponenProps> = (props) => {
    // stateの定義
    const [loggedIn, setLoggedIn] = useState<boolean>(false);
    const [authInfo, setAuthInfo] = useState<AuthInfo>(getDefaultAuthInfo());

    // authInfoのバリデーション
    useEffect(() => {
        // authInfoに正しく値がセットされているかどうかをチェック
        if (authInfo?.userId) {
            setAutoInfoToLocalStorage(authInfo);
            setLoggedIn(true);
        } else {
            setLoggedIn(false);
        }
    }, [authInfo]);
    return (
        <LoggedInContext.Provider value={loggedIn}>
            <AuthInfoContext.Provider value={[authInfo, setAuthInfo]}>
                {props.children}
            </AuthInfoContext.Provider>
        </LoggedInContext.Provider>
    );
};
