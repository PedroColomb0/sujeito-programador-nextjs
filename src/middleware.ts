import { NextRequest, NextResponse } from "next/server"

export function middleware(request : NextRequest){

    const authenticated = false

    // Podemos fazer de uma maneira bem simples exemplo se voce não estiver logado e tentar acessar a dashboard
    // voce será redirecionado para a page.tsx a home

    if(request.nextUrl.pathname.startsWith('/dashboard') && !authenticated){
        return NextResponse.redirect(new URL('/',request.url))
    }

    return NextResponse.next()
}