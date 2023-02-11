---
sidebar_position: 2
title: Objects 조회
---

이 문서에서는 GameObjects, UIElements의 식별자를 파악하는 방법을 설명합니다.
해당 식별자를 통해 GamiumController에서 스크립트를 작성할 수 있습니다.

## GamiumEditor 윈도우사용
- 열려있는 Unity프로젝트에서 `Window > GamiumEditor`로 이동합니다.
- Gamium 윈도우 창이 표시됩니다.

## GamiumEditor

|       기능      |   설명 |
|-----------------|---|
| GameObject Path | [The Hierarchy window](https://docs.unity3d.com/Manual/Hierarchy.html) 창에서 선택된 GameObject를 검색하기 위한 식별자 입니다. GameObject를 선택할때 마다 변경됩니다.  |
| UIElement Path  |  `Window > UI Toolkit > Debugger`를 통해 표시되는 UI Toolkit Debugger에서 선택된 UIElement를 검색하기 위한 식별자 입니다. UIElement를 선택할때 마다 변경됩니다. <br></br>( Unity 프로젝트내에서 UGUI가 아닌 UI Toolkit을 통해 UI를 구현한 경우에만 사용됩니다. ) |
| World Position  | The Hierarchy window에서 선택된 GameObject의 World position 입니다. |
| Position Picker | Scene 윈도우에서 마우스 위치의 World Position을 알아내고 싶을때 사용합니다. Raycast 를 사용하므로 Plane에 Collider가 존재할때만 동작합니다.  |

:::tip
 GamiumEditor 에 필드들은 각자 기능이 있으며 마우스 Hover시 설명을 확인할 수 있습니다.
:::
