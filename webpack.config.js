const path = require('path');

const webpack = require('webpack'); // webpack 모듈 불러온다.

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve('./src/app.js'), // resolve : path에서 지원하는 명령어 ('엔트리 경로를 넣어준다.')
    },
    output: {
        filename: '[name].js', // 모듈 번들링을 통해 밖으로 빼내질 때 어떤 파일명으로 보낼 것인지 설정
        //[name] 이라고 해두면 entry의 main 이 이 [name]안으로 들어간다
        // 정해진 이름에 따라 동적으로 파일명이 바뀌게 하기 위해서 이런식으로 처리한다.
        path: path.resolve('./dist'), // output의 경로 설정
    },

    module: {
        rules: [
            // 여기서 로더를 추가할 수 있습니다.
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 20 * 1024, // 20kb (20 * 1kb(=1024))
                    },
                },
            },
        ],
    },

    plugins: [
        new webpack.BannerPlugin({
            //toLocaleString : 날짜의 문자열 표현을 지역의 언어에 맞는 형식으로 반환합니다.
            banner: `마지막 빌드 시간 : ${new Date().toLocaleString()} 입니다.`,
        }),
    ],
};
