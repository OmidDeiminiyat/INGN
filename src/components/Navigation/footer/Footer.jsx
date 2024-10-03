import { NavLink } from "react-router-dom";
import React from 'react';
import style from './Footer.module.scss';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';



export function Footer(){
  const [activePath, setActivePath] = useState('active');


  useEffect(() => {
    setActivePath(location.pathname);
  }, [location]);


    return(
        <>
            <footer className={style.footer}>
                <section>
                    <ul>
                        <h5>Adresse:</h5>
                        <li>Intet nyt -Godt nyt ApS</li>
                        <li>Tulipanvej 232 <br />7320 <br />Valby Øster</li>
                    </ul>
                    <ul>
                        <h5>Links</h5>
                        <li>vikanweb.dk</li>
                        <li>overpådenandenside.dk</li>
                        <li>retsinformation.dk</li>
                        <li>nogetmednews.dk</li>
                    </ul>
                    <ul>
                        <h5>Politik</h5>
                        <li>
                            <a href="">Privatlivspolitik</a>
                        </li>
                        <li>
                            <a href="">Cookiepolitik</a>
                        </li>
                        <li>
                            <a href="">Købsinformation</a>
                        </li>
                        <li><a href="">Delingspolitik</a></li>
                    </ul>
                    <ul>
                        <h5>Kontakt</h5>
                        <li>ingen@nyhed.dk</li>
                        <li>Telefon: 23232323</li>
                        <li>Fax: 123123-333</li>
                    </ul>
                </section>
            </footer>
        </>
    );
} 