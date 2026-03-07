---
title: "FPS 제한 계산기 - 최적의 프레임 제한을 위한 완벽 가이드"
date: 2026-03-07 12:00:00 +0900
categories: [PC]
tags: [FPS, G-Sync, FreeSync, 프레임제한, NVIDIA, AMD]
---

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@700;800&family=Noto+Sans+KR:wght@300;400;500;700&display=swap');

.fps-report {
    display: block;
    width: 100%;
    max-width: 950px;
    margin: 40px 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;
    text-align: left;
}

.fps-report * {
    box-sizing: border-box;
    line-height: 1.8;
    text-align: left;
}

.fps-report h2 {
    font-family: 'Noto Serif KR', serif;
    font-size: 1.7rem;
    font-weight: 700;
    color: #60a5fa !important;
    margin: 60px 0 25px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding-bottom: 10px;
}

.fps-report h3 {
    font-size: 1.4rem;
    font-weight: 700;
    margin: 35px 0 15px 0;
}

.fps-report p {
    margin-bottom: 20px;
    font-size: 16.5px;
    color: #e5e7eb;
}

.fps-report strong {
    font-weight: 700;
    color: #60a5fa;
}

.fps-report ul {
    list-style: disc;
    padding-left: 20px;
    margin-bottom: 25px;
}

.fps-report li {
    margin-bottom: 10px;
    color: #d1d5db;
}

.fps-report .alert-banner {
    background-color: rgba(244, 63, 94, 0.1);
    border-left: 6px solid #f43f5e;
    padding: 25px;
    margin-bottom: 40px;
    border-radius: 4px;
}

.fps-report .tech-card {
    background-color: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 25px;
    border-radius: 12px;
    margin: 25px 0;
}

.fps-report .formula-display {
    background: rgba(59, 130, 246, 0.1);
    border: 1px dashed #3b82f6;
    padding: 40px 20px;
    border-radius: 12px;
    font-family: 'Times New Roman', serif;
    font-size: 2rem;
    text-align: center;
    color: #60a5fa;
    font-style: italic;
    margin: 35px 0;
}

.fps-report .calculator-panel {
    background: rgba(15, 17, 23, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 40px;
    border-radius: 20px;
    margin: 50px 0;
    backdrop-filter: blur(5px);
}

.fps-report .input-group-container {
    display: flex;
    align-items: stretch;
    margin-top: 15px;
    filter: drop-shadow(0 4px 12px rgba(0,0,0,0.3));
}

.fps-report .input-box {
    background: #1f2937;
    border: 1px solid #374151;
    padding: 18px 20px;
    border-radius: 12px 0 0 12px;
    font-size: 20px;
    color: white;
    width: 100%;
    outline: none;
    transition: border-color 0.2s;
}

.fps-report .input-box:focus {
    border-color: #3b82f6;
}

.fps-report .calc-btn {
    background: #2563eb;
    border: none;
    border-radius: 0 12px 12px 0;
    padding: 0 40px;
    font-weight: 800;
    font-size: 17px;
    color: white;
    cursor: pointer;
    white-space: nowrap;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.2);
}

.fps-report .calc-btn:hover {
    background: #3b82f6;
    box-shadow: 0 0 15px rgba(59, 130, 246, 0.4);
}

.fps-report table {
    width: 100%;
    border-collapse: collapse;
    margin: 30px 0;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.fps-report th {
    background-color: rgba(255, 255, 255, 0.08);
    padding: 15px;
    border-bottom: 2px solid #60a5fa;
    font-weight: 800;
}

.fps-report td {
    padding: 15px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.15);
    color: #9ca3af;
}

.brand-icon {
    height: 26px;
    width: auto;
    vertical-align: middle;
    margin-right: 12px;
    display: inline-block;
}

.accent-green {
    color: #4ade80 !important;
}

@media (max-width: 768px) {
    .fps-report .calculator-panel { padding: 25px; }
    .fps-report .input-group-container { flex-direction: column; }
    .fps-report .input-box { border-radius: 12px; margin-bottom: 10px; }
    .fps-report .calc-btn { border-radius: 12px; height: 60px; width: 100%; padding: 0; }
}
</style>

<div class="fps-report">

<!-- Critical Alert -->
<div class="alert-banner">
<h3 style="color: #fb7185; margin-top: 0; font-size: 1.4rem;">⚠️ 중요 업데이트 (2026.01.05)</h3>
<p style="color: #fda4af; font-weight: 700; margin-bottom: 10px;">본 가이드의 권장 사항은 인게임 프레임이 500 FPS 미만인 경우에만 유효합니다.</p>
<p style="font-size: 15px; color: #e5e7eb;">만약 시스템 사양이 매우 높아 인게임 프레임이 <b>500 FPS를 지속적으로 초과</b>한다면, 화면 찢어짐(Screen Tearing) 현상은 육안으로 인지하기 거의 불가능해집니다. 이 경우 G-Sync+V-Sync 조합의 지연시간 방어보다 <b>Nvidia Reflex</b> 또는 <b>AMD Anti-Lag 2</b>만 활성화한 채 프레임 제한을 완전히 해제하는 것이 최상의 반응 속도를 제공합니다.</p>
</div>

<!-- 1. Theory -->
<section>
<h2>1. 이론적 배경: 프레임 타임 버퍼와 상식의 오류</h2>
<p>144Hz, 240Hz, 그리고 360Hz 이상의 초고주사율 모니터가 보편화되었습니다. 하지만 많은 사용자들이 여전히 과거의 기준인 <b>"모니터 주사율보다 3 FPS 낮게 설정"</b>하는 규칙에 머물러 있습니다.</p>
<p>최적의 FPS 제한(FPS Cap)은 단순히 숫자를 깎는 행위가 아니라, 가변 주사율(VRR) 범위 내에서 안정적으로 작동하기 위한 <b>프레임 타임 버퍼(Frame Time Buffers)</b>를 확보하는 정밀한 시간의 문제입니다.</p>
<div class="tech-card">
<h4 style="color: #60a5fa; margin-top: 0;">프레임 타임 윈도우(Frame Time Window)의 핵심</h4>
<p style="font-size: 15px; color: #9ca3af;">화면 찢어짐을 완벽히 방지하면서 V-Sync로 인한 지연 시간(Input Lag)을 원천 차단하려면, 주사율 주기와 프레임 생성 시간 사이에 최소 <b>0.25ms ~ 0.3ms</b>의 버퍼가 필요합니다.</p>
<ul style="margin-top: 15px; margin-bottom: 0;">
<li><b>120Hz 환경:</b> 120Hz(8.33ms)와 116 FPS(8.62ms) 사이의 간격은 <b>0.29ms</b>입니다. (충분한 버퍼 확보)</li>
<li><b>240Hz 환경:</b> 240Hz(4.16ms)와 236 FPS(4.23ms, -4 FPS 설정 시) 사이의 간격은 고작 <b>0.07ms</b>입니다. (버퍼 부족으로 VRR 범위 이탈 위험)</li>
</ul>
</div>
<p>결론적으로 주사율이 높아질수록 기존의 -3 FPS 규칙은 작동하지 않으며, 훨씬 더 공격적인 프레임 제한 수치가 필요합니다.</p>
</section>

<!-- 2. Formula -->
<section>
<h2>2. 프레임 제한 공식 및 수학적 검증</h2>
<p>Special K 개발자가 제안하고 현재 Nvidia Reflex 기술이 내부 알고리즘으로 채택하고 있는 공식입니다. 이 공식을 적용하면 어떤 주사율에서도 안정적인 버퍼를 확보할 수 있습니다.</p>
<div class="formula-display">FPS 제한 = 주사율 − (주사율 × 주사율 / 4096)</div>
<div class="tech-card" style="background: rgba(0,0,0,0.2); border-color: #374151;">
<p style="margin-bottom: 12px;">예를 들어 <b>240Hz</b> 모니터의 경우 계산은 다음과 같습니다:</p>
<p style="font-family: monospace; font-size: 18px; color: #60a5fa; margin-bottom: 5px;">240 − (240 × 240 / 4096) = 225.9375 FPS</p>
<p style="font-size: 14px; color: #9ca3af; margin-bottom: 20px;">(이는 Nvidia Reflex가 설정하는 값과 동일합니다.)</p>
<p style="margin-bottom: 12px;">이 수치는 우리가 목표로 하는 0.25~0.3ms의 프레임 타임 버퍼를 제공합니다. 아래의 간단한 수학적 계산으로 이를 검증할 수 있습니다.</p>
<div style="font-family: monospace; background: rgba(0,0,0,0.3); padding: 20px; border-radius: 8px; font-size: 14.5px; border: 1px solid rgba(255,255,255,0.05);">
<p style="margin-bottom: 8px;">1000 ÷ 240Hz = 4.166666...ms <span style="color: #6b7280; font-size: 12px;">(※ 1000ms = 1초)</span></p>
<p style="margin-bottom: 8px;">1000 ÷ 225.9375 FPS = 4.42600276625 ms</p>
<p class="accent-green" style="margin-top: 10px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">4.42600276625 - 4.166666... = <b>0.259336099... ms 버퍼 확보 (0.259336 ms)</b></p>
</div>
<p style="margin-top: 20px; font-size: 15px; color: #d1d5db;">이처럼 공식에 따른 프레임 제한은 모니터의 주사율 주기(Refresh Cycle)를 초과하여 발생하는 지연 시간을 방지할 수 있도록 적절한 버퍼를 제공합니다.</p>
</div>
</section>

<!-- 3. Calculator + Table -->
<section>
<h2>3. 주요 주사율별 FPS 제한</h2>
<p>공식을 적용했을 때 각 주사율에 따른 최적의 프레임 제한 수치는 다음과 같습니다:</p>
<p style="font-size: 14px; color: #9ca3af; margin-bottom: 30px;">(윈도우 설정 &gt; 시스템 &gt; 디스플레이 &gt; 고급 디스플레이 &gt; 새로 고침 빈도 선택에서 현재 적용중인 Hz 확인할 것)</p>

<!-- FPS Cap 계산기 -->
<div class="calculator-panel">
<h3 style="margin-top: 0;">FPS 제한 계산기</h3>
<p style="font-size: 14px; color: #9ca3af; margin-bottom: 14px;">주사율(Hz)만 입력하면 권장 Cap(Floor)을 크게 표시하고, 정밀값(Exact)은 작은 글씨로 함께 보여줍니다.</p>
<div class="input-group-container">
<input id="hzInput" class="input-box" min="1" step="1" type="number" value="240" placeholder="예: 240" />
<button id="calcBtn" class="calc-btn" type="button">계산</button>
</div>
<div style="margin-top: 18px;">
<div id="resultFps" style="font-size: 56px; font-weight: 900; line-height: 1.05; color: #60a5fa;">-</div>
<div id="exactValue" style="font-size: 12px; color: #9ca3af; margin-top: 6px;">Exact: -</div>
</div>
</div>

<div class="tech-card" style="border-left: 4px solid #60a5fa;">
<p style="font-size: 15px; margin-bottom: 0;"><b>원문 작성자의 권장 설정 팁:</b> 모니터 최대 Hz를 선택하고 <b>NVIDIA 제어판 - 3D 설정 관리 - 전역 설정 - 최대 프레임 속도</b>에서 위 공식을 적용한 정수값을 설정하십시오. 만약 특정 게임에서 더 낮은 프레임을 적용하고 싶다면 <b>프로그램 설정</b> 탭에서 해당 게임만 별도로 최대 프레임 속도를 추가 설정하는 것을 추천합니다.</p>
</div>

<table>
<thead>
<tr>
<th>주사율(Refresh Rate)</th>
<th>설정값(Floor)</th>
<th>정밀 계산값</th>
<th>기존 -3 FPS 대비 차이</th>
</tr>
</thead>
<tbody>
<tr>
<td><b>480 Hz</b></td>
<td style="font-weight: 800; color: #60a5fa;">423 FPS</td>
<td>423.7500</td>
<td style="color: #fb7185;">-57 FPS 차이</td>
</tr>
<tr>
<td><b>360 Hz</b></td>
<td style="font-weight: 800; color: #60a5fa;">328 FPS</td>
<td>328.3593</td>
<td style="color: #fb7185;">-32 FPS 차이</td>
</tr>
<tr>
<td><b>240 Hz</b></td>
<td style="font-weight: 800; color: #60a5fa;">225 FPS</td>
<td>225.9375</td>
<td style="color: #fb7185;">-15 FPS 차이</td>
</tr>
<tr>
<td><b>180 Hz</b></td>
<td style="font-weight: 800; color: #60a5fa;">172 FPS</td>
<td>172.0898</td>
<td style="color: #fb7185;">-8 FPS 차이</td>
</tr>
<tr>
<td><b>165 Hz</b></td>
<td style="font-weight: 800; color: #60a5fa;">158 FPS</td>
<td>158.3532</td>
<td>-7 FPS 차이</td>
</tr>
<tr>
<td><b>144 Hz</b></td>
<td style="font-weight: 800; color: #60a5fa;">138 FPS</td>
<td>138.9375</td>
<td>-6 FPS 차이</td>
</tr>
<tr>
<td><b>120 Hz</b></td>
<td style="font-weight: 800; color: #60a5fa;">116 FPS</td>
<td>116.4843</td>
<td>-4 FPS 차이</td>
</tr>
</tbody>
</table>
</section>

<!-- 4. Gaming Context -->
<section>
<h2>4. 스팀 공식 가이드와 GPU 점유율 관리</h2>

<div class="tech-card">
<h3 style="margin-top: 0; color: #fb7185;">🎮 CS2 및 발로란트 권장조합</h3>
<p style="font-size: 14.5px; margin-bottom: 12px;">Valve는 카운터 스트라이크 2(CS2) 기술 가이드에서 <b>G-Sync + V-Sync + Reflex</b> 조합을 공식적으로 권장하고 있습니다. <b>Reflex를 지원하지 않는 게임에서도 이 설정을 사용하는 것이 프레임 제한을 풀고 G-Sync/V-Sync를 끄는 것보다 지연 시간이 더 낮습니다.</b></p>
<a style="color: #009a87; text-decoration: underline;" href="https://help.steampowered.com/en/faqs/view/418E-7A04-B0DA-9032#reflex" target="_blank" rel="noopener">Steam 공식 가이드 확인</a>
</div>

<div class="tech-card">
<h3 style="margin-top: 0; color: #60a5fa;">📊 GPU 점유율(Usage) 관리</h3>
<p style="font-size: 14.5px; margin-bottom: 12px;">마지막으로 고려해야 할 요소는 <b>GPU 점유율</b>입니다. Reflex와 Anti-Lag 2는 이를 자동으로 관리해 주지만, 해당 기능을 사용할 수 없는 경우에는 GPU 점유율이 100%에 도달하지 않도록 주의해야 합니다.</p>
<p style="font-size: 14.5px; margin-bottom: 12px;">GPU 점유율이 최대치에 도달하면 프레임 타임이 불안정해져 스터터링(끊김)이 발생하고 입력 지연 시간이 늘어날 수 있습니다. 이상적인 목표는 <b>GPU 점유율을 항상 95% 이하로 유지</b>하는 것입니다.</p>
<p style="font-size: 14.5px; margin-bottom: 0; color: #9ca3af;">만약 특정 게임에서 160 FPS를 찍을 때 점유율이 99%라면, 점유율을 95% 수준으로 낮추기 위해 프레임 제한을 145 FPS 정도로 더 낮춰야 합니다. 앞서 언급한 전역 프레임 제한 공식은 <b>GPU 점유율에 여유가 있을 때만 유효</b>합니다.</p>
</div>
</section>

<!-- 5. Setup Guide -->
<section>
<h2>5. 하드웨어별 최종 권장 설정 가이드</h2>

<!-- NVIDIA -->
<div style="border-left: 6px solid #76b900; padding: 30px; background: rgba(118, 185, 0, 0.08); margin-bottom: 25px; border-radius: 4px;">
<h3 style="margin-top: 0; display: flex; align-items: center;"><img class="brand-icon" src="https://i.namu.wiki/i/VWThM431cNzXa45xcrNmgqL35o5Xq8GJacpk8LoE-6Hk-nvB5cO6ngbaojRQ8mR89pNNDzsLyc-W-jbd3ZdsKQ.svg" alt="NVIDIA" /> NVIDIA 사용자 설정</h3>
<ul style="list-style: circle; padding-left: 20px;">
<li><b>G-Sync:</b> NVIDIA 제어판 또는 NVIDIA 앱에서 <b>켜기(On)</b></li>
<li><b>V-Sync:</b> NVIDIA 제어판에서는 <b>켜기(On)</b>, 게임 내 설정에서는 <b>끄기(Off)</b></li>
<li><b>최대 프레임 속도:</b> 위 공식으로 계산된 값을 전역 제한으로 설정</li>
<li><b>Reflex:</b> 게임 내 설정에서 사용 가능 시 항상 <b>켜기(On)</b></li>
<li><b>저지연 모드:</b> 울트라 (Ultra) - 게임 내 Reflex 옵션이 없을 때 대체 사용</li>
</ul>
</div>

<!-- AMD -->
<div style="border-left: 6px solid #ed1c24; padding: 30px; background: rgba(237, 28, 36, 0.08); margin-bottom: 25px; border-radius: 4px;">
<h3 style="margin-top: 0; display: flex; align-items: center;"><img class="brand-icon" src="https://i.namu.wiki/i/ybQR62mNqEEy9T0C1oSfIPZgGUJgtv4mBPK9atOI6VJsvks0ssAPj5m1DtYr6F_lurSw0m0iPBPbtnpYeAEC_g.svg" alt="AMD" /> AMD 사용자 설정</h3>
<ul style="list-style: circle; padding-left: 20px;">
<li><b>FreeSync:</b> Adrenalin 앱에서 <b>켜기(On)</b></li>
<li><b>V-Sync:</b> Adrenalin 앱에서 <b>수직 재생 대기: 항상 켜기로 설정</b>, 게임 내 설정에서는 <b>끄기(Off)</b></li>
<li><b>Radeon Chill:</b> 공식에 따른 값을 전역 제한으로 설정 (최소 및 최대 FPS를 동일하게 입력)</li>
</ul>
</div>

<!-- Linux -->
<div style="border-left: 6px solid #4b5563; padding: 30px; background: rgba(255, 255, 255, 0.05); border-radius: 4px;">
<h3 style="margin-top: 0; display: flex; align-items: center;"><img class="brand-icon" src="https://i.namu.wiki/i/EM2QYZV9ixA3vcHSC4eqpTDvxR7OM7BzgSkr3JecjUg56qNumA8iYpFkInx_tNoXfs_1JpiWlJzthl6TekFYlQ.svg" alt="Linux" /> Linux (Wayland) 사용자 설정</h3>
<ul style="list-style: circle; padding-left: 20px;">
<li><b>VRR:</b> 데스크톱 환경(DE) 시스템 설정에서 활성화</li>
<li><b>Vsync:</b> MangoHUD에서 <b>MAILBOX</b>로 설정, 게임 내 설정에서는 <b>끄기(Off)</b></li>
<li><b>프레임 제한:</b> MangoHUD에서 주사율 기반의 전역 제한 수치 설정</li>
</ul>
</div>
</section>

<!-- Footer -->
<footer style="margin-top: 80px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 30px; text-align: left;">
<p style="font-size: 13px; color: #6b7280; margin-bottom: 8px; font-weight: bold;">출처</p>
<a style="font-size: 13px; color: #4b5563; text-decoration: underline;" href="https://www.reddit.com/r/nvidia/comments/1lokih2/putting_misconceptions_about_optimal_fps_caps/" target="_blank" rel="noopener">www.reddit.com/r/nvidia/comments/1lokih2/putting_misconceptions_about_optimal_fps_caps/</a>
</footer>

</div>

<script>
function calculateFps() {
  var hzInput = document.getElementById('hzInput');
  var resultDisplay = document.getElementById('resultFps');
  var exactDisplay = document.getElementById('exactValue');

  if (!hzInput || !resultDisplay || !exactDisplay) return;

  var hz = parseFloat(hzInput.value);
  if (!isFinite(hz) || hz <= 0) {
    resultDisplay.innerText = "-";
    exactDisplay.innerText = "Exact: -";
    return;
  }

  var fps = hz - ((hz * hz) / 4096);

  resultDisplay.innerText = Math.floor(fps);
  exactDisplay.innerText = "Exact: " + fps.toFixed(6);
}

document.addEventListener('DOMContentLoaded', function() {
  var hzInput = document.getElementById('hzInput');
  var btn = document.getElementById('calcBtn');

  if (btn) btn.addEventListener('click', calculateFps);
  if (hzInput) {
    hzInput.addEventListener('input', calculateFps);
    hzInput.addEventListener('keydown', function(e) { if (e.key === 'Enter') calculateFps(); });
  }

  calculateFps();
});
</script>
