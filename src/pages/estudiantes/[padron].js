import React, { useState, useEffect } from "react";
import fetch from 'isomorphic-unfetch'
import useSWR from 'swr'
import { useRouter } from 'next/router'
import { Container } from 'react-bootstrap';
import Layout from '../../components/layout';

export default function Estudiantes({ padron }) {
    const API_URL = `/api/estudiantes/padron/`;
    const fetcher = async url => await fetch(url).then(r => r.json())
    const { data, errors } = useSWR(API_URL + 93179, fetcher)
    console.log(API_URL)
    return (
        <Layout>
            <Container>
                <h1>{data?.padron} - {data?.nombre} {data?.apellido}  </h1>
            </Container>
            <h2></h2>
        </Layout>
    );
}

export async function getServerSideProps(context) {
    return {
        props: {
            padron: context.params.padron
        }, // will be passed to the page component as props
    }
}