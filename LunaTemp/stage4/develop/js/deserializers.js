var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i198 = root || request.c( 'UnityEngine.JointSpring' )
  var i199 = data
  i198.spring = i199[0]
  i198.damper = i199[1]
  i198.targetPosition = i199[2]
  return i198
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i200 = root || request.c( 'UnityEngine.JointMotor' )
  var i201 = data
  i200.m_TargetVelocity = i201[0]
  i200.m_Force = i201[1]
  i200.m_FreeSpin = i201[2]
  return i200
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i202 = root || request.c( 'UnityEngine.JointLimits' )
  var i203 = data
  i202.m_Min = i203[0]
  i202.m_Max = i203[1]
  i202.m_Bounciness = i203[2]
  i202.m_BounceMinVelocity = i203[3]
  i202.m_ContactDistance = i203[4]
  i202.minBounce = i203[5]
  i202.maxBounce = i203[6]
  return i202
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i204 = root || request.c( 'UnityEngine.JointDrive' )
  var i205 = data
  i204.m_PositionSpring = i205[0]
  i204.m_PositionDamper = i205[1]
  i204.m_MaximumForce = i205[2]
  i204.m_UseAcceleration = i205[3]
  return i204
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i206 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i207 = data
  i206.m_Spring = i207[0]
  i206.m_Damper = i207[1]
  return i206
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i208 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i209 = data
  i208.m_Limit = i209[0]
  i208.m_Bounciness = i209[1]
  i208.m_ContactDistance = i209[2]
  return i208
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i210 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i211 = data
  i210.m_ExtremumSlip = i211[0]
  i210.m_ExtremumValue = i211[1]
  i210.m_AsymptoteSlip = i211[2]
  i210.m_AsymptoteValue = i211[3]
  i210.m_Stiffness = i211[4]
  return i210
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i212 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i213 = data
  i212.m_LowerAngle = i213[0]
  i212.m_UpperAngle = i213[1]
  return i212
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i214 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i215 = data
  i214.m_MotorSpeed = i215[0]
  i214.m_MaximumMotorTorque = i215[1]
  return i214
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i216 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i217 = data
  i216.m_DampingRatio = i217[0]
  i216.m_Frequency = i217[1]
  i216.m_Angle = i217[2]
  return i216
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i218 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i219 = data
  i218.m_LowerTranslation = i219[0]
  i218.m_UpperTranslation = i219[1]
  return i218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i220 = root || new pc.UnityMaterial()
  var i221 = data
  i220.name = i221[0]
  request.r(i221[1], i221[2], 0, i220, 'shader')
  i220.renderQueue = i221[3]
  i220.enableInstancing = !!i221[4]
  var i223 = i221[5]
  var i222 = []
  for(var i = 0; i < i223.length; i += 1) {
    i222.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i223[i + 0]) );
  }
  i220.floatParameters = i222
  var i225 = i221[6]
  var i224 = []
  for(var i = 0; i < i225.length; i += 1) {
    i224.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i225[i + 0]) );
  }
  i220.colorParameters = i224
  var i227 = i221[7]
  var i226 = []
  for(var i = 0; i < i227.length; i += 1) {
    i226.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i227[i + 0]) );
  }
  i220.vectorParameters = i226
  var i229 = i221[8]
  var i228 = []
  for(var i = 0; i < i229.length; i += 1) {
    i228.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i229[i + 0]) );
  }
  i220.textureParameters = i228
  var i231 = i221[9]
  var i230 = []
  for(var i = 0; i < i231.length; i += 1) {
    i230.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i231[i + 0]) );
  }
  i220.materialFlags = i230
  return i220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i235 = data
  i234.name = i235[0]
  i234.value = i235[1]
  return i234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i239 = data
  i238.name = i239[0]
  i238.value = new pc.Color(i239[1], i239[2], i239[3], i239[4])
  return i238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i243 = data
  i242.name = i243[0]
  i242.value = new pc.Vec4( i243[1], i243[2], i243[3], i243[4] )
  return i242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i247 = data
  i246.name = i247[0]
  request.r(i247[1], i247[2], 0, i246, 'value')
  return i246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i251 = data
  i250.name = i251[0]
  i250.enabled = !!i251[1]
  return i250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i253 = data
  i252.name = i253[0]
  i252.index = i253[1]
  i252.startup = !!i253[2]
  return i252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i255 = data
  i254.aspect = i255[0]
  i254.orthographic = !!i255[1]
  i254.orthographicSize = i255[2]
  i254.backgroundColor = new pc.Color(i255[3], i255[4], i255[5], i255[6])
  i254.nearClipPlane = i255[7]
  i254.farClipPlane = i255[8]
  i254.fieldOfView = i255[9]
  i254.depth = i255[10]
  i254.clearFlags = i255[11]
  i254.cullingMask = i255[12]
  i254.rect = i255[13]
  request.r(i255[14], i255[15], 0, i254, 'targetTexture')
  i254.usePhysicalProperties = !!i255[16]
  i254.focalLength = i255[17]
  i254.sensorSize = new pc.Vec2( i255[18], i255[19] )
  i254.lensShift = new pc.Vec2( i255[20], i255[21] )
  i254.gateFit = i255[22]
  i254.commandBufferCount = i255[23]
  i254.cameraType = i255[24]
  i254.enabled = !!i255[25]
  return i254
}

Deserializers["PlayworksComplianceHooks"] = function (request, data, root) {
  var i256 = root || request.c( 'PlayworksComplianceHooks' )
  var i257 = data
  i256.iosStoreUrl = i257[0]
  i256.androidStoreUrl = i257[1]
  i256.defaultLevel = i257[2]
  return i256
}

Deserializers["SimpleDodgeGame"] = function (request, data, root) {
  var i258 = root || request.c( 'SimpleDodgeGame' )
  var i259 = data
  i258.playerRadius = i259[0]
  i258.playerMoveSpeed = i259[1]
  i258.playerBottomOffset = i259[2]
  i258.obstacleMinRadius = i259[3]
  i258.obstacleMaxRadius = i259[4]
  i258.obstacleMinSpeed = i259[5]
  i258.obstacleMaxSpeed = i259[6]
  i258.spawnIntervalStart = i259[7]
  i258.spawnIntervalEnd = i259[8]
  i258.difficultyRampSeconds = i259[9]
  i258.sidePadding = i259[10]
  i258.despawnPadding = i259[11]
  request.r(i259[12], i259[13], 0, i258, 'spriteMaterial')
  return i258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i261 = data
  i260.name = i261[0]
  i260.tagId = i261[1]
  i260.enabled = !!i261[2]
  i260.isStatic = !!i261[3]
  i260.layer = i261[4]
  return i260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i263 = data
  i262.ambientIntensity = i263[0]
  i262.reflectionIntensity = i263[1]
  i262.ambientMode = i263[2]
  i262.ambientLight = new pc.Color(i263[3], i263[4], i263[5], i263[6])
  i262.ambientSkyColor = new pc.Color(i263[7], i263[8], i263[9], i263[10])
  i262.ambientGroundColor = new pc.Color(i263[11], i263[12], i263[13], i263[14])
  i262.ambientEquatorColor = new pc.Color(i263[15], i263[16], i263[17], i263[18])
  i262.fogColor = new pc.Color(i263[19], i263[20], i263[21], i263[22])
  i262.fogEndDistance = i263[23]
  i262.fogStartDistance = i263[24]
  i262.fogDensity = i263[25]
  i262.fog = !!i263[26]
  request.r(i263[27], i263[28], 0, i262, 'skybox')
  i262.fogMode = i263[29]
  var i265 = i263[30]
  var i264 = []
  for(var i = 0; i < i265.length; i += 1) {
    i264.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i265[i + 0]) );
  }
  i262.lightmaps = i264
  i262.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i263[31], i262.lightProbes)
  i262.lightmapsMode = i263[32]
  i262.mixedBakeMode = i263[33]
  i262.environmentLightingMode = i263[34]
  i262.ambientProbe = new pc.SphericalHarmonicsL2(i263[35])
  i262.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i263[36])
  i262.useReferenceAmbientProbe = !!i263[37]
  request.r(i263[38], i263[39], 0, i262, 'customReflection')
  request.r(i263[40], i263[41], 0, i262, 'defaultReflection')
  i262.defaultReflectionMode = i263[42]
  i262.defaultReflectionResolution = i263[43]
  i262.sunLightObjectId = i263[44]
  i262.pixelLightCount = i263[45]
  i262.defaultReflectionHDR = !!i263[46]
  i262.hasLightDataAsset = !!i263[47]
  i262.hasManualGenerate = !!i263[48]
  return i262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i269 = data
  request.r(i269[0], i269[1], 0, i268, 'lightmapColor')
  request.r(i269[2], i269[3], 0, i268, 'lightmapDirection')
  return i268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i270 = root || new UnityEngine.LightProbes()
  var i271 = data
  return i270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i279 = data
  var i281 = i279[0]
  var i280 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i281.length; i += 1) {
    i280.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i281[i + 0]));
  }
  i278.ShaderCompilationErrors = i280
  i278.name = i279[1]
  i278.guid = i279[2]
  var i283 = i279[3]
  var i282 = []
  for(var i = 0; i < i283.length; i += 1) {
    i282.push( i283[i + 0] );
  }
  i278.shaderDefinedKeywords = i282
  var i285 = i279[4]
  var i284 = []
  for(var i = 0; i < i285.length; i += 1) {
    i284.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i285[i + 0]) );
  }
  i278.passes = i284
  var i287 = i279[5]
  var i286 = []
  for(var i = 0; i < i287.length; i += 1) {
    i286.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i287[i + 0]) );
  }
  i278.usePasses = i286
  var i289 = i279[6]
  var i288 = []
  for(var i = 0; i < i289.length; i += 1) {
    i288.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i289[i + 0]) );
  }
  i278.defaultParameterValues = i288
  request.r(i279[7], i279[8], 0, i278, 'unityFallbackShader')
  i278.readDepth = !!i279[9]
  i278.hasDepthOnlyPass = !!i279[10]
  i278.isCreatedByShaderGraph = !!i279[11]
  i278.disableBatching = !!i279[12]
  i278.compiled = !!i279[13]
  return i278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i293 = data
  i292.shaderName = i293[0]
  i292.errorMessage = i293[1]
  return i292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i298 = root || new pc.UnityShaderPass()
  var i299 = data
  i298.id = i299[0]
  i298.subShaderIndex = i299[1]
  i298.name = i299[2]
  i298.passType = i299[3]
  i298.grabPassTextureName = i299[4]
  i298.usePass = !!i299[5]
  i298.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i299[6], i298.zTest)
  i298.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i299[7], i298.zWrite)
  i298.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i299[8], i298.culling)
  i298.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i299[9], i298.blending)
  i298.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i299[10], i298.alphaBlending)
  i298.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i299[11], i298.colorWriteMask)
  i298.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i299[12], i298.offsetUnits)
  i298.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i299[13], i298.offsetFactor)
  i298.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i299[14], i298.stencilRef)
  i298.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i299[15], i298.stencilReadMask)
  i298.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i299[16], i298.stencilWriteMask)
  i298.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i299[17], i298.stencilOp)
  i298.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i299[18], i298.stencilOpFront)
  i298.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i299[19], i298.stencilOpBack)
  var i301 = i299[20]
  var i300 = []
  for(var i = 0; i < i301.length; i += 1) {
    i300.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i301[i + 0]) );
  }
  i298.tags = i300
  var i303 = i299[21]
  var i302 = []
  for(var i = 0; i < i303.length; i += 1) {
    i302.push( i303[i + 0] );
  }
  i298.passDefinedKeywords = i302
  var i305 = i299[22]
  var i304 = []
  for(var i = 0; i < i305.length; i += 1) {
    i304.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i305[i + 0]) );
  }
  i298.passDefinedKeywordGroups = i304
  var i307 = i299[23]
  var i306 = []
  for(var i = 0; i < i307.length; i += 1) {
    i306.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i307[i + 0]) );
  }
  i298.variants = i306
  var i309 = i299[24]
  var i308 = []
  for(var i = 0; i < i309.length; i += 1) {
    i308.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i309[i + 0]) );
  }
  i298.excludedVariants = i308
  i298.hasDepthReader = !!i299[25]
  return i298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i311 = data
  i310.val = i311[0]
  i310.name = i311[1]
  return i310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i313 = data
  i312.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i313[0], i312.src)
  i312.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i313[1], i312.dst)
  i312.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i313[2], i312.op)
  return i312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i315 = data
  i314.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i315[0], i314.pass)
  i314.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i315[1], i314.fail)
  i314.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i315[2], i314.zFail)
  i314.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i315[3], i314.comp)
  return i314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i319 = data
  i318.name = i319[0]
  i318.value = i319[1]
  return i318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i323 = data
  var i325 = i323[0]
  var i324 = []
  for(var i = 0; i < i325.length; i += 1) {
    i324.push( i325[i + 0] );
  }
  i322.keywords = i324
  i322.hasDiscard = !!i323[1]
  return i322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i329 = data
  i328.passId = i329[0]
  i328.subShaderIndex = i329[1]
  var i331 = i329[2]
  var i330 = []
  for(var i = 0; i < i331.length; i += 1) {
    i330.push( i331[i + 0] );
  }
  i328.keywords = i330
  i328.vertexProgram = i329[3]
  i328.fragmentProgram = i329[4]
  i328.exportedForWebGl2 = !!i329[5]
  i328.readDepth = !!i329[6]
  return i328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i335 = data
  request.r(i335[0], i335[1], 0, i334, 'shader')
  i334.pass = i335[2]
  return i334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i339 = data
  i338.name = i339[0]
  i338.type = i339[1]
  i338.value = new pc.Vec4( i339[2], i339[3], i339[4], i339[5] )
  i338.textureValue = i339[6]
  i338.shaderPropertyFlag = i339[7]
  return i338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i341 = data
  var i343 = i341[0]
  var i342 = []
  for(var i = 0; i < i343.length; i += 1) {
    i342.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i343[i + 0]) );
  }
  i340.files = i342
  i340.componentToPrefabIds = i341[1]
  return i340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i347 = data
  i346.path = i347[0]
  request.r(i347[1], i347[2], 0, i346, 'unityObject')
  return i346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i349 = data
  var i351 = i349[0]
  var i350 = []
  for(var i = 0; i < i351.length; i += 1) {
    i350.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i351[i + 0]) );
  }
  i348.scriptsExecutionOrder = i350
  var i353 = i349[1]
  var i352 = []
  for(var i = 0; i < i353.length; i += 1) {
    i352.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i353[i + 0]) );
  }
  i348.sortingLayers = i352
  var i355 = i349[2]
  var i354 = []
  for(var i = 0; i < i355.length; i += 1) {
    i354.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i355[i + 0]) );
  }
  i348.cullingLayers = i354
  i348.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i349[3], i348.timeSettings)
  i348.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i349[4], i348.physicsSettings)
  i348.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i349[5], i348.physics2DSettings)
  i348.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i349[6], i348.qualitySettings)
  i348.enableRealtimeShadows = !!i349[7]
  i348.enableAutoInstancing = !!i349[8]
  i348.enableStaticBatching = !!i349[9]
  i348.enableDynamicBatching = !!i349[10]
  i348.lightmapEncodingQuality = i349[11]
  i348.desiredColorSpace = i349[12]
  var i357 = i349[13]
  var i356 = []
  for(var i = 0; i < i357.length; i += 1) {
    i356.push( i357[i + 0] );
  }
  i348.allTags = i356
  return i348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i361 = data
  i360.name = i361[0]
  i360.value = i361[1]
  return i360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i365 = data
  i364.id = i365[0]
  i364.name = i365[1]
  i364.value = i365[2]
  return i364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i369 = data
  i368.id = i369[0]
  i368.name = i369[1]
  return i368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i371 = data
  i370.fixedDeltaTime = i371[0]
  i370.maximumDeltaTime = i371[1]
  i370.timeScale = i371[2]
  i370.maximumParticleTimestep = i371[3]
  return i370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i373 = data
  i372.gravity = new pc.Vec3( i373[0], i373[1], i373[2] )
  i372.defaultSolverIterations = i373[3]
  i372.bounceThreshold = i373[4]
  i372.autoSyncTransforms = !!i373[5]
  i372.autoSimulation = !!i373[6]
  var i375 = i373[7]
  var i374 = []
  for(var i = 0; i < i375.length; i += 1) {
    i374.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i375[i + 0]) );
  }
  i372.collisionMatrix = i374
  return i372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i379 = data
  i378.enabled = !!i379[0]
  i378.layerId = i379[1]
  i378.otherLayerId = i379[2]
  return i378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i381 = data
  request.r(i381[0], i381[1], 0, i380, 'material')
  i380.gravity = new pc.Vec2( i381[2], i381[3] )
  i380.positionIterations = i381[4]
  i380.velocityIterations = i381[5]
  i380.velocityThreshold = i381[6]
  i380.maxLinearCorrection = i381[7]
  i380.maxAngularCorrection = i381[8]
  i380.maxTranslationSpeed = i381[9]
  i380.maxRotationSpeed = i381[10]
  i380.baumgarteScale = i381[11]
  i380.baumgarteTOIScale = i381[12]
  i380.timeToSleep = i381[13]
  i380.linearSleepTolerance = i381[14]
  i380.angularSleepTolerance = i381[15]
  i380.defaultContactOffset = i381[16]
  i380.autoSimulation = !!i381[17]
  i380.queriesHitTriggers = !!i381[18]
  i380.queriesStartInColliders = !!i381[19]
  i380.callbacksOnDisable = !!i381[20]
  i380.reuseCollisionCallbacks = !!i381[21]
  i380.autoSyncTransforms = !!i381[22]
  var i383 = i381[23]
  var i382 = []
  for(var i = 0; i < i383.length; i += 1) {
    i382.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i383[i + 0]) );
  }
  i380.collisionMatrix = i382
  return i380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i387 = data
  i386.enabled = !!i387[0]
  i386.layerId = i387[1]
  i386.otherLayerId = i387[2]
  return i386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i389 = data
  var i391 = i389[0]
  var i390 = []
  for(var i = 0; i < i391.length; i += 1) {
    i390.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i391[i + 0]) );
  }
  i388.qualityLevels = i390
  var i393 = i389[1]
  var i392 = []
  for(var i = 0; i < i393.length; i += 1) {
    i392.push( i393[i + 0] );
  }
  i388.names = i392
  i388.shadows = i389[2]
  i388.anisotropicFiltering = i389[3]
  i388.antiAliasing = i389[4]
  i388.lodBias = i389[5]
  i388.shadowCascades = i389[6]
  i388.shadowDistance = i389[7]
  i388.shadowmaskMode = i389[8]
  i388.shadowProjection = i389[9]
  i388.shadowResolution = i389[10]
  i388.softParticles = !!i389[11]
  i388.softVegetation = !!i389[12]
  i388.activeColorSpace = i389[13]
  i388.desiredColorSpace = i389[14]
  i388.masterTextureLimit = i389[15]
  i388.maxQueuedFrames = i389[16]
  i388.particleRaycastBudget = i389[17]
  i388.pixelLightCount = i389[18]
  i388.realtimeReflectionProbes = !!i389[19]
  i388.shadowCascade2Split = i389[20]
  i388.shadowCascade4Split = new pc.Vec3( i389[21], i389[22], i389[23] )
  i388.streamingMipmapsActive = !!i389[24]
  i388.vSyncCount = i389[25]
  i388.asyncUploadBufferSize = i389[26]
  i388.asyncUploadTimeSlice = i389[27]
  i388.billboardsFaceCameraPosition = !!i389[28]
  i388.shadowNearPlaneOffset = i389[29]
  i388.streamingMipmapsMemoryBudget = i389[30]
  i388.maximumLODLevel = i389[31]
  i388.streamingMipmapsAddAllCameras = !!i389[32]
  i388.streamingMipmapsMaxLevelReduction = i389[33]
  i388.streamingMipmapsRenderersPerFrame = i389[34]
  i388.resolutionScalingFixedDPIFactor = i389[35]
  i388.streamingMipmapsMaxFileIORequests = i389[36]
  i388.currentQualityLevel = i389[37]
  return i388
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"7":[8],"9":[8],"10":[8],"11":[8],"12":[8],"13":[8],"14":[15],"16":[1],"17":[18],"19":[18],"20":[18],"21":[18],"22":[18],"23":[18],"24":[25],"26":[25],"27":[25],"28":[25],"29":[25],"30":[25],"31":[25],"32":[25],"33":[25],"34":[25],"35":[25],"36":[25],"37":[25],"38":[1],"39":[40],"41":[42],"43":[42],"44":[45],"46":[47],"48":[1],"49":[50],"51":[52],"53":[44],"54":[45],"55":[40,45],"56":[45,57],"58":[45],"59":[57,45],"60":[40],"61":[57,45],"62":[45],"63":[45],"64":[45],"65":[44],"66":[57,45],"67":[45],"68":[44],"69":[45],"70":[45],"71":[45],"72":[45],"73":[45],"74":[45],"75":[45],"76":[45],"77":[45],"78":[57,45],"79":[45],"80":[45],"81":[45],"82":[45],"83":[57,45],"84":[45],"85":[52],"86":[52],"87":[52],"88":[52],"89":[1],"90":[1]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","PlayworksComplianceHooks","SimpleDodgeGame","UnityEngine.Material","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Canvas","UnityEngine.RectTransform","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.EventSystems.EventSystem","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","UnityEngine.CanvasRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Image","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.CanvasScaler","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.58f2";

Deserializers.productName = "AdGame2";

Deserializers.lunaInitializationTime = "02/05/2026 07:16:13";

Deserializers.lunaDaysRunning = "0.9";

Deserializers.lunaVersion = "7.0.0";

Deserializers.lunaSHA = "3bcc3e343f23b4c67e768a811a8d088c7f7adbc5";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "36796";

Deserializers.projectId = "61b95b9034cdb4f8ab822253bfbd2351";

Deserializers.packagesInfo = "com.unity.inputsystem: 1.14.2\ncom.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1814";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3391";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, physics2d, particle-system, reflection, prefabs, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneOSX";

Deserializers.applicationIdentifier = "com.DefaultCompany.2D-Project";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "85172666-8c3e-48d5-b979-c0c04e6038db";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

