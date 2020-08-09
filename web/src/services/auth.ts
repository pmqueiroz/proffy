interface Response {
    token: string;
    user: {
        name: string;
        email: string;
    };
}

export function signIn(): Promise<Response> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                token: 'alkdjalkjdq29ueqklad12laskjdq12psdkweqpwdaklsdaw',
                user: {
                    name: 'Victória',
                    email: 'contato@pmqueiroz.me',
                },
            });
        }, 200);
    });
}