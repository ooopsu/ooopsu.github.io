---
title: "NVIDIA 쉐이더 캐시 파일 삭제하기"
categories: [PC]
tags: [NVIDIA 쉐이더 캐시 파일 삭제하기]
---



출처 : [https://nvidia.custhelp.com/app/answers/detail/a\_id/5735/](https://nvidia.custhelp.com/app/answers/detail/a_id/5735/)

> 하드 드라이브나 NVMe 드라이브에 저장된 파일은 때때로 손상될 수 있습니다.  
> 만약 NVIDIA 쉐이더 캐시 파일이 손상되면, 애플리케이션이나 게임이 실행 시 충돌하거나, 성능이 저하되거나, 또는 시각적 오류(아티팩트)를 표시할 수 있습니다.  
>   
> 이 문제를 해결하려면 NVIDIA 쉐이더 캐시 파일을 삭제하여 다음번에 애플리케이션이나 게임이 실행될 때 자동으로 다시 생성되도록 하십시오.

  
**사전 준비 단계**

-   NVIDIA 제어판을 엽니다.
-   왼쪽 패널에서 3D 설정 관리를 선택합니다.
-   오른쪽 패널에서 쉐이더 캐시 사이즈를 찾아 비활성화를 선택합니다. 적용을 클릭하여 설정을 저장합니다.
-   PC를 재부팅합니다.

<img width="950" height="701" alt="1" src="/assets/img/cache_1.png" />


  
PC를 재부팅하고 Windows로 돌아오면, 쉐이더 캐시 파일을 삭제하기 위해 아래 두 가지 방법 중 하나를 선택할 수 있습니다.

>   
> **1. 수동으로 파일 삭제하기**

-   실행 대화 상자를 엽니다 (Win + R 키).
-   열기 필드에 다음 위치를 입력하고 DXCache 및 GLCache 폴더 내의 모든 파일을 삭제합니다.

```
C:\Users\사용자명\AppData\Local\NVIDIA\GLCache
```

-   다음으로 아래 위치를 입력하고 DXCache 폴더 내의 모든 파일을 삭제합니다.

```
C:\Users\사용자명\AppData\Local\NVIDIA\DXCache
```

-   NVIDIA 제어판을 다시 열고 쉐이더 캐시를 드라이버 기본값(또는 무제한)으로 다시 설정합니다.
-   적용을 클릭하여 변경 사항을 저장하고, PC를 한 번 더 재부팅합니다.

  

> **2. DDU(Display Driver Uninstaller) 사용하기**

     DDU를 사용하면 드라이버 관련 파일뿐만 아니라 쉐이더 캐시까지 깔끔하게 정리할 수 있습니다.

-   Display Driver Uninstaller (DDU) 유틸리티를 다운로드합니다:  
    [https://www.wagnardsoft.com/display-driver-uninstaller-ddu](https://www.wagnardsoft.com/display-driver-uninstaller-ddu)
-   유틸리티를 실행합니다.
-   우측 메뉴에서 --장치 유형 선택--을 GPU로, --장치 선택--을 NVIDIA로 설정합니다.
-   '쉐이더 캐시 정리 (전용)' 버튼을 클릭합니다.  
      
    
<img width="670" height="690" alt="2" src="/assets/img/cache_2.png" />

정리가 완료되면 팝업 창이 나타납니다.  
확인 후 NVIDIA 제어판에서 쉐이더 캐시 설정을 원래대로(기본값 또는 무제한) 복구하고 PC를 재부팅하면 완료됩니다.
