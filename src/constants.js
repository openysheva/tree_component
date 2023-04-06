export const entityExample = {
    "entity_id":"7df2aa2e-e01a-4928-9b52-fec5c83fa3ac",
    "service":"test",
    "external_id":null,
    "start_tour_id":null,
    "name":"Квартира на Патриках 23",
    "tours":[
        {
            "tour_id":"e580249a-edb0-44b4-8901-2e730a61da69",
            "start_panorama_id":null,
            "name":"1 этаж",
            "rooms":[
                {
                    "room_id":"a183605c-1fc2-49f9-baf0-5b46c11bd353",
                    "name":"Спальня",
                    "panoramas":[
                        {
                            "panorama_id":"fe71ee90-c044-422a-892c-c5f9de5552f7",
                            "photo_url":"https://yastatic.net/s3/vertis-frontend/internal-frontend/marketing/test/60f5JPVd2MkQqYs4oJHy3IMG_20221210_131036_398.jpg",
                            "metadata":{},
                            "pointers":null
                        },
                        {
                            "panorama_id":"2965b548-9276-4501-8ecc-23dcef59e16b",
                            "photo_url":"https://yastatic.net/s3/vertis-frontend/internal-frontend/marketing/test/ynXXQ_sU9m8H7PWUgDjg0IMG_20221210_131036_398.jpg",
                            "metadata":{},
                            "pointers":null
                        },
                        {
                            "panorama_id":"c52e10db-8022-42d7-9f87-0661c2c8752d",
                            "photo_url":"https://yastatic.net/s3/vertis-frontend/internal-frontend/marketing/test/mRPSEeY1050UHHEZBOEMFIMG_20221210_131036_662.jpg",
                            "metadata":{},
                            "pointers":null
                        },
                        {
                            "panorama_id":"33cc6518-2d24-4316-b379-d5a18c6eb291",
                            "photo_url":"https://jing.yandex-team.ru/files/kanmir/tunnel.jpg",
                            "metadata":{"keka":"peka"},
                            "pointers":[
                                {
                                    "pointer_id":"3a9ee1bf-9368-4e44-a280-85f9b16850e0",
                                    "destination_panorama_id":"0044bd87-fdba-461d-bb87-cf4150484687",
                                    "coordinates":"(75,50)",
                                    "camera_direction":null
                                }
                            ]
                        }
                    ]
                },
                {
                    "room_id":"fc3572f7-92c6-494a-8fe4-60ba4c0332e6",
                    "name":"Балкон",
                    "panoramas":[
                        {
                            "panorama_id":"6d62d49f-f144-4871-bc24-df6f3a78b482",
                            "photo_url":"https://yastatic.net/s3/vertis-frontend/internal-frontend/marketing/test/bRzR85uI84BGYGWKhvyD6IMG_20221210_131036_281.jpg",
                            "metadata":{},
                            "pointers":null
                        },
                        {
                            "panorama_id":"0044bd87-fdba-461d-bb87-cf4150484687",
                            "photo_url":"https://jing.yandex-team.ru/files/kanmir/sunset.jpg",
                            "metadata":{"keka2":"peka2"},
                            "pointers":[
                                {
                                    "pointer_id":"1b1d67c3-077f-4e2e-b098-62c8b07a5a3f",
                                    "destination_panorama_id":"33cc6518-2d24-4316-b379-d5a18c6eb291",
                                    "coordinates":"(25,50)","camera_direction":null
                                }
                            ]
                        },
                        {
                            "panorama_id":"055fe423-a9d4-4f44-8589-4023041b94eb",
                            "photo_url":"https://yastatic.net/s3/vertis-frontend/internal-frontend/marketing/test/Q5NRo3KS5c9sUFRJcU0iqIMG_20221210_131036_249.jpg",
                            "metadata":{},
                            "pointers":null
                        }
                    ]
                }
            ]
        }
    ]
}

export const SLIDE_TYPES = {
    TOUR: 'tour',
    ROOM: 'room',
    PANORAMA: 'panorama',
    POINTER: 'pointer', 
};