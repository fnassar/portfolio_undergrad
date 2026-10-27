export const vertex = /* glsl */ `
  attribute vec3 position;
  attribute vec4 random;

  uniform mat4 modelMatrix;
  uniform mat4 viewMatrix;
  uniform mat4 projectionMatrix;
  uniform float uTime;
  uniform float uSpread;
  uniform float uBaseSize;
  uniform vec2 uMouse;
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  uniform vec3 uColorC;

  varying vec4 vRandom;
  varying vec3 vColor;

  void main() {
    vRandom = random;
    vColor = mix(mix(uColorA, uColorB, random.x), uColorC, random.y * 0.6);

    vec3 pos = position * uSpread;
    pos.z *= 6.0;
    pos.xy += uMouse * random.z * 1.5;

    vec4 worldPos = modelMatrix * vec4(pos, 1.0);
    worldPos.x += sin(uTime * random.z + 6.28 * random.w) * mix(0.1, 1.2, random.x);
    worldPos.y += sin(uTime * random.y + 6.28 * random.x) * mix(0.1, 1.2, random.w);

    vec4 viewPos = viewMatrix * worldPos;
    gl_PointSize = uBaseSize * (0.4 + random.x) / length(viewPos.xyz);
    gl_Position = projectionMatrix * viewPos;
  }
`;

export const fragment = /* glsl */ `
  precision highp float;

  uniform float uTime;
  varying vec4 vRandom;
  varying vec3 vColor;

  void main() {
    float dist = length(gl_PointCoord - vec2(0.5));
    float alpha = smoothstep(0.5, 0.35, dist) * 0.75;
    float twinkle = 0.75 + 0.25 * sin(uTime * 2.0 + vRandom.y * 6.28);
    gl_FragColor = vec4(vColor * twinkle, alpha);
  }
`;
