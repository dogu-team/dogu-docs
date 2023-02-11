---
sidebar_position: 1
title: 구성
---

## 1단계 : SDK 추가하기

// TODO(yow) : AWS Code Artifact를 사용하든. 따로 파일 url을 제공하든 ( 인증받은 유저에게만 제공하여? ) 코드 제공하여야함

[Project manifest](https://docs.unity3d.com/Manual/upm-manifestPrj.html)애서 `dependencies`에 다음과 같이 추가합니다.

```
"com.dogu.gamium.unity.server": "https://github.com/dogu-team/dogu.git?path=/packages/csharp/gamium-agent#main",
```

## 2단계 : Scripting Define Symbol 추가
[Custom scripting symbols](https://docs.unity3d.com/Manual/CustomScriptingSymbols.html) 에서 `USE_GAMIUM` 를 추가합니다.






