var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i588 = root || request.c( 'UnityEngine.JointSpring' )
  var i589 = data
  i588.spring = i589[0]
  i588.damper = i589[1]
  i588.targetPosition = i589[2]
  return i588
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i590 = root || request.c( 'UnityEngine.JointMotor' )
  var i591 = data
  i590.m_TargetVelocity = i591[0]
  i590.m_Force = i591[1]
  i590.m_FreeSpin = i591[2]
  return i590
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i592 = root || request.c( 'UnityEngine.JointLimits' )
  var i593 = data
  i592.m_Min = i593[0]
  i592.m_Max = i593[1]
  i592.m_Bounciness = i593[2]
  i592.m_BounceMinVelocity = i593[3]
  i592.m_ContactDistance = i593[4]
  i592.minBounce = i593[5]
  i592.maxBounce = i593[6]
  return i592
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i594 = root || request.c( 'UnityEngine.JointDrive' )
  var i595 = data
  i594.m_PositionSpring = i595[0]
  i594.m_PositionDamper = i595[1]
  i594.m_MaximumForce = i595[2]
  i594.m_UseAcceleration = i595[3]
  return i594
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i596 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i597 = data
  i596.m_Spring = i597[0]
  i596.m_Damper = i597[1]
  return i596
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i598 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i599 = data
  i598.m_Limit = i599[0]
  i598.m_Bounciness = i599[1]
  i598.m_ContactDistance = i599[2]
  return i598
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i600 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i601 = data
  i600.m_ExtremumSlip = i601[0]
  i600.m_ExtremumValue = i601[1]
  i600.m_AsymptoteSlip = i601[2]
  i600.m_AsymptoteValue = i601[3]
  i600.m_Stiffness = i601[4]
  return i600
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i602 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i603 = data
  i602.m_LowerAngle = i603[0]
  i602.m_UpperAngle = i603[1]
  return i602
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i604 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i605 = data
  i604.m_MotorSpeed = i605[0]
  i604.m_MaximumMotorTorque = i605[1]
  return i604
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i606 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i607 = data
  i606.m_DampingRatio = i607[0]
  i606.m_Frequency = i607[1]
  i606.m_Angle = i607[2]
  return i606
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i608 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i609 = data
  i608.m_LowerTranslation = i609[0]
  i608.m_UpperTranslation = i609[1]
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i611 = data
  i610.name = i611[0]
  i610.index = i611[1]
  i610.startup = !!i611[2]
  return i610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i613 = data
  i612.aspect = i613[0]
  i612.orthographic = !!i613[1]
  i612.orthographicSize = i613[2]
  i612.backgroundColor = new pc.Color(i613[3], i613[4], i613[5], i613[6])
  i612.nearClipPlane = i613[7]
  i612.farClipPlane = i613[8]
  i612.fieldOfView = i613[9]
  i612.depth = i613[10]
  i612.clearFlags = i613[11]
  i612.cullingMask = i613[12]
  i612.rect = i613[13]
  request.r(i613[14], i613[15], 0, i612, 'targetTexture')
  i612.usePhysicalProperties = !!i613[16]
  i612.focalLength = i613[17]
  i612.sensorSize = new pc.Vec2( i613[18], i613[19] )
  i612.lensShift = new pc.Vec2( i613[20], i613[21] )
  i612.gateFit = i613[22]
  i612.commandBufferCount = i613[23]
  i612.cameraType = i613[24]
  i612.enabled = !!i613[25]
  return i612
}

Deserializers["PlayworksComplianceHooks"] = function (request, data, root) {
  var i614 = root || request.c( 'PlayworksComplianceHooks' )
  var i615 = data
  i614.iosStoreUrl = i615[0]
  i614.androidStoreUrl = i615[1]
  i614.defaultLevel = i615[2]
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i617 = data
  i616.name = i617[0]
  i616.tagId = i617[1]
  i616.enabled = !!i617[2]
  i616.isStatic = !!i617[3]
  i616.layer = i617[4]
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i619 = data
  i618.ambientIntensity = i619[0]
  i618.reflectionIntensity = i619[1]
  i618.ambientMode = i619[2]
  i618.ambientLight = new pc.Color(i619[3], i619[4], i619[5], i619[6])
  i618.ambientSkyColor = new pc.Color(i619[7], i619[8], i619[9], i619[10])
  i618.ambientGroundColor = new pc.Color(i619[11], i619[12], i619[13], i619[14])
  i618.ambientEquatorColor = new pc.Color(i619[15], i619[16], i619[17], i619[18])
  i618.fogColor = new pc.Color(i619[19], i619[20], i619[21], i619[22])
  i618.fogEndDistance = i619[23]
  i618.fogStartDistance = i619[24]
  i618.fogDensity = i619[25]
  i618.fog = !!i619[26]
  request.r(i619[27], i619[28], 0, i618, 'skybox')
  i618.fogMode = i619[29]
  var i621 = i619[30]
  var i620 = []
  for(var i = 0; i < i621.length; i += 1) {
    i620.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i621[i + 0]) );
  }
  i618.lightmaps = i620
  i618.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i619[31], i618.lightProbes)
  i618.lightmapsMode = i619[32]
  i618.mixedBakeMode = i619[33]
  i618.environmentLightingMode = i619[34]
  i618.ambientProbe = new pc.SphericalHarmonicsL2(i619[35])
  i618.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i619[36])
  i618.useReferenceAmbientProbe = !!i619[37]
  request.r(i619[38], i619[39], 0, i618, 'customReflection')
  request.r(i619[40], i619[41], 0, i618, 'defaultReflection')
  i618.defaultReflectionMode = i619[42]
  i618.defaultReflectionResolution = i619[43]
  i618.sunLightObjectId = i619[44]
  i618.pixelLightCount = i619[45]
  i618.defaultReflectionHDR = !!i619[46]
  i618.hasLightDataAsset = !!i619[47]
  i618.hasManualGenerate = !!i619[48]
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i625 = data
  request.r(i625[0], i625[1], 0, i624, 'lightmapColor')
  request.r(i625[2], i625[3], 0, i624, 'lightmapDirection')
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i626 = root || new UnityEngine.LightProbes()
  var i627 = data
  return i626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i634 = root || new pc.UnityMaterial()
  var i635 = data
  i634.name = i635[0]
  request.r(i635[1], i635[2], 0, i634, 'shader')
  i634.renderQueue = i635[3]
  i634.enableInstancing = !!i635[4]
  var i637 = i635[5]
  var i636 = []
  for(var i = 0; i < i637.length; i += 1) {
    i636.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i637[i + 0]) );
  }
  i634.floatParameters = i636
  var i639 = i635[6]
  var i638 = []
  for(var i = 0; i < i639.length; i += 1) {
    i638.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i639[i + 0]) );
  }
  i634.colorParameters = i638
  var i641 = i635[7]
  var i640 = []
  for(var i = 0; i < i641.length; i += 1) {
    i640.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i641[i + 0]) );
  }
  i634.vectorParameters = i640
  var i643 = i635[8]
  var i642 = []
  for(var i = 0; i < i643.length; i += 1) {
    i642.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i643[i + 0]) );
  }
  i634.textureParameters = i642
  var i645 = i635[9]
  var i644 = []
  for(var i = 0; i < i645.length; i += 1) {
    i644.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i645[i + 0]) );
  }
  i634.materialFlags = i644
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i649 = data
  i648.name = i649[0]
  i648.value = i649[1]
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i653 = data
  i652.name = i653[0]
  i652.value = new pc.Color(i653[1], i653[2], i653[3], i653[4])
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i657 = data
  i656.name = i657[0]
  i656.value = new pc.Vec4( i657[1], i657[2], i657[3], i657[4] )
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i661 = data
  i660.name = i661[0]
  request.r(i661[1], i661[2], 0, i660, 'value')
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i665 = data
  i664.name = i665[0]
  i664.enabled = !!i665[1]
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i667 = data
  var i669 = i667[0]
  var i668 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i669.length; i += 1) {
    i668.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i669[i + 0]));
  }
  i666.ShaderCompilationErrors = i668
  i666.name = i667[1]
  i666.guid = i667[2]
  var i671 = i667[3]
  var i670 = []
  for(var i = 0; i < i671.length; i += 1) {
    i670.push( i671[i + 0] );
  }
  i666.shaderDefinedKeywords = i670
  var i673 = i667[4]
  var i672 = []
  for(var i = 0; i < i673.length; i += 1) {
    i672.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i673[i + 0]) );
  }
  i666.passes = i672
  var i675 = i667[5]
  var i674 = []
  for(var i = 0; i < i675.length; i += 1) {
    i674.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i675[i + 0]) );
  }
  i666.usePasses = i674
  var i677 = i667[6]
  var i676 = []
  for(var i = 0; i < i677.length; i += 1) {
    i676.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i677[i + 0]) );
  }
  i666.defaultParameterValues = i676
  request.r(i667[7], i667[8], 0, i666, 'unityFallbackShader')
  i666.readDepth = !!i667[9]
  i666.hasDepthOnlyPass = !!i667[10]
  i666.isCreatedByShaderGraph = !!i667[11]
  i666.disableBatching = !!i667[12]
  i666.compiled = !!i667[13]
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i681 = data
  i680.shaderName = i681[0]
  i680.errorMessage = i681[1]
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i686 = root || new pc.UnityShaderPass()
  var i687 = data
  i686.id = i687[0]
  i686.subShaderIndex = i687[1]
  i686.name = i687[2]
  i686.passType = i687[3]
  i686.grabPassTextureName = i687[4]
  i686.usePass = !!i687[5]
  i686.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i687[6], i686.zTest)
  i686.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i687[7], i686.zWrite)
  i686.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i687[8], i686.culling)
  i686.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i687[9], i686.blending)
  i686.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i687[10], i686.alphaBlending)
  i686.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i687[11], i686.colorWriteMask)
  i686.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i687[12], i686.offsetUnits)
  i686.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i687[13], i686.offsetFactor)
  i686.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i687[14], i686.stencilRef)
  i686.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i687[15], i686.stencilReadMask)
  i686.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i687[16], i686.stencilWriteMask)
  i686.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i687[17], i686.stencilOp)
  i686.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i687[18], i686.stencilOpFront)
  i686.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i687[19], i686.stencilOpBack)
  var i689 = i687[20]
  var i688 = []
  for(var i = 0; i < i689.length; i += 1) {
    i688.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i689[i + 0]) );
  }
  i686.tags = i688
  var i691 = i687[21]
  var i690 = []
  for(var i = 0; i < i691.length; i += 1) {
    i690.push( i691[i + 0] );
  }
  i686.passDefinedKeywords = i690
  var i693 = i687[22]
  var i692 = []
  for(var i = 0; i < i693.length; i += 1) {
    i692.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i693[i + 0]) );
  }
  i686.passDefinedKeywordGroups = i692
  var i695 = i687[23]
  var i694 = []
  for(var i = 0; i < i695.length; i += 1) {
    i694.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i695[i + 0]) );
  }
  i686.variants = i694
  var i697 = i687[24]
  var i696 = []
  for(var i = 0; i < i697.length; i += 1) {
    i696.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i697[i + 0]) );
  }
  i686.excludedVariants = i696
  i686.hasDepthReader = !!i687[25]
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i699 = data
  i698.val = i699[0]
  i698.name = i699[1]
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i701 = data
  i700.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i701[0], i700.src)
  i700.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i701[1], i700.dst)
  i700.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i701[2], i700.op)
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i703 = data
  i702.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i703[0], i702.pass)
  i702.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i703[1], i702.fail)
  i702.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i703[2], i702.zFail)
  i702.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i703[3], i702.comp)
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i707 = data
  i706.name = i707[0]
  i706.value = i707[1]
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i711 = data
  var i713 = i711[0]
  var i712 = []
  for(var i = 0; i < i713.length; i += 1) {
    i712.push( i713[i + 0] );
  }
  i710.keywords = i712
  i710.hasDiscard = !!i711[1]
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i717 = data
  i716.passId = i717[0]
  i716.subShaderIndex = i717[1]
  var i719 = i717[2]
  var i718 = []
  for(var i = 0; i < i719.length; i += 1) {
    i718.push( i719[i + 0] );
  }
  i716.keywords = i718
  i716.vertexProgram = i717[3]
  i716.fragmentProgram = i717[4]
  i716.exportedForWebGl2 = !!i717[5]
  i716.readDepth = !!i717[6]
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i723 = data
  request.r(i723[0], i723[1], 0, i722, 'shader')
  i722.pass = i723[2]
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i727 = data
  i726.name = i727[0]
  i726.type = i727[1]
  i726.value = new pc.Vec4( i727[2], i727[3], i727[4], i727[5] )
  i726.textureValue = i727[6]
  i726.shaderPropertyFlag = i727[7]
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i729 = data
  var i731 = i729[0]
  var i730 = []
  for(var i = 0; i < i731.length; i += 1) {
    i730.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i731[i + 0]) );
  }
  i728.files = i730
  i728.componentToPrefabIds = i729[1]
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i735 = data
  i734.path = i735[0]
  request.r(i735[1], i735[2], 0, i734, 'unityObject')
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i737 = data
  var i739 = i737[0]
  var i738 = []
  for(var i = 0; i < i739.length; i += 1) {
    i738.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i739[i + 0]) );
  }
  i736.scriptsExecutionOrder = i738
  var i741 = i737[1]
  var i740 = []
  for(var i = 0; i < i741.length; i += 1) {
    i740.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i741[i + 0]) );
  }
  i736.sortingLayers = i740
  var i743 = i737[2]
  var i742 = []
  for(var i = 0; i < i743.length; i += 1) {
    i742.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i743[i + 0]) );
  }
  i736.cullingLayers = i742
  i736.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i737[3], i736.timeSettings)
  i736.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i737[4], i736.physicsSettings)
  i736.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i737[5], i736.physics2DSettings)
  i736.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i737[6], i736.qualitySettings)
  i736.enableRealtimeShadows = !!i737[7]
  i736.enableAutoInstancing = !!i737[8]
  i736.enableStaticBatching = !!i737[9]
  i736.enableDynamicBatching = !!i737[10]
  i736.lightmapEncodingQuality = i737[11]
  i736.desiredColorSpace = i737[12]
  var i745 = i737[13]
  var i744 = []
  for(var i = 0; i < i745.length; i += 1) {
    i744.push( i745[i + 0] );
  }
  i736.allTags = i744
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i749 = data
  i748.name = i749[0]
  i748.value = i749[1]
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i753 = data
  i752.id = i753[0]
  i752.name = i753[1]
  i752.value = i753[2]
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i757 = data
  i756.id = i757[0]
  i756.name = i757[1]
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i759 = data
  i758.fixedDeltaTime = i759[0]
  i758.maximumDeltaTime = i759[1]
  i758.timeScale = i759[2]
  i758.maximumParticleTimestep = i759[3]
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i761 = data
  i760.gravity = new pc.Vec3( i761[0], i761[1], i761[2] )
  i760.defaultSolverIterations = i761[3]
  i760.bounceThreshold = i761[4]
  i760.autoSyncTransforms = !!i761[5]
  i760.autoSimulation = !!i761[6]
  var i763 = i761[7]
  var i762 = []
  for(var i = 0; i < i763.length; i += 1) {
    i762.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i763[i + 0]) );
  }
  i760.collisionMatrix = i762
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i767 = data
  i766.enabled = !!i767[0]
  i766.layerId = i767[1]
  i766.otherLayerId = i767[2]
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i769 = data
  request.r(i769[0], i769[1], 0, i768, 'material')
  i768.gravity = new pc.Vec2( i769[2], i769[3] )
  i768.positionIterations = i769[4]
  i768.velocityIterations = i769[5]
  i768.velocityThreshold = i769[6]
  i768.maxLinearCorrection = i769[7]
  i768.maxAngularCorrection = i769[8]
  i768.maxTranslationSpeed = i769[9]
  i768.maxRotationSpeed = i769[10]
  i768.baumgarteScale = i769[11]
  i768.baumgarteTOIScale = i769[12]
  i768.timeToSleep = i769[13]
  i768.linearSleepTolerance = i769[14]
  i768.angularSleepTolerance = i769[15]
  i768.defaultContactOffset = i769[16]
  i768.autoSimulation = !!i769[17]
  i768.queriesHitTriggers = !!i769[18]
  i768.queriesStartInColliders = !!i769[19]
  i768.callbacksOnDisable = !!i769[20]
  i768.reuseCollisionCallbacks = !!i769[21]
  i768.autoSyncTransforms = !!i769[22]
  var i771 = i769[23]
  var i770 = []
  for(var i = 0; i < i771.length; i += 1) {
    i770.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i771[i + 0]) );
  }
  i768.collisionMatrix = i770
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i775 = data
  i774.enabled = !!i775[0]
  i774.layerId = i775[1]
  i774.otherLayerId = i775[2]
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i777 = data
  var i779 = i777[0]
  var i778 = []
  for(var i = 0; i < i779.length; i += 1) {
    i778.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i779[i + 0]) );
  }
  i776.qualityLevels = i778
  var i781 = i777[1]
  var i780 = []
  for(var i = 0; i < i781.length; i += 1) {
    i780.push( i781[i + 0] );
  }
  i776.names = i780
  i776.shadows = i777[2]
  i776.anisotropicFiltering = i777[3]
  i776.antiAliasing = i777[4]
  i776.lodBias = i777[5]
  i776.shadowCascades = i777[6]
  i776.shadowDistance = i777[7]
  i776.shadowmaskMode = i777[8]
  i776.shadowProjection = i777[9]
  i776.shadowResolution = i777[10]
  i776.softParticles = !!i777[11]
  i776.softVegetation = !!i777[12]
  i776.activeColorSpace = i777[13]
  i776.desiredColorSpace = i777[14]
  i776.masterTextureLimit = i777[15]
  i776.maxQueuedFrames = i777[16]
  i776.particleRaycastBudget = i777[17]
  i776.pixelLightCount = i777[18]
  i776.realtimeReflectionProbes = !!i777[19]
  i776.shadowCascade2Split = i777[20]
  i776.shadowCascade4Split = new pc.Vec3( i777[21], i777[22], i777[23] )
  i776.streamingMipmapsActive = !!i777[24]
  i776.vSyncCount = i777[25]
  i776.asyncUploadBufferSize = i777[26]
  i776.asyncUploadTimeSlice = i777[27]
  i776.billboardsFaceCameraPosition = !!i777[28]
  i776.shadowNearPlaneOffset = i777[29]
  i776.streamingMipmapsMemoryBudget = i777[30]
  i776.maximumLODLevel = i777[31]
  i776.streamingMipmapsAddAllCameras = !!i777[32]
  i776.streamingMipmapsMaxLevelReduction = i777[33]
  i776.streamingMipmapsRenderersPerFrame = i777[34]
  i776.resolutionScalingFixedDPIFactor = i777[35]
  i776.streamingMipmapsMaxFileIORequests = i777[36]
  i776.currentQualityLevel = i777[37]
  return i776
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"5":[6],"7":[6],"8":[6],"9":[6],"10":[6],"11":[6],"12":[13],"14":[0],"15":[16],"17":[16],"18":[16],"19":[16],"20":[16],"21":[16],"22":[23],"24":[23],"25":[23],"26":[23],"27":[23],"28":[23],"29":[23],"30":[23],"31":[23],"32":[23],"33":[23],"34":[23],"35":[23],"36":[0],"37":[38],"39":[40],"41":[40],"42":[43],"44":[45],"46":[0],"47":[48],"49":[50],"51":[42],"52":[43],"53":[38,43],"54":[43,55],"56":[43],"57":[55,43],"58":[38],"59":[55,43],"60":[43],"61":[43],"62":[43],"63":[42],"64":[55,43],"65":[43],"66":[42],"67":[43],"68":[43],"69":[43],"70":[43],"71":[43],"72":[43],"73":[43],"74":[43],"75":[43],"76":[55,43],"77":[43],"78":[43],"79":[43],"80":[43],"81":[55,43],"82":[43],"83":[50],"84":[50],"85":[50],"86":[50],"87":[0],"88":[0]}

Deserializers.types = ["UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","PlayworksComplianceHooks","UnityEngine.Shader","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Canvas","UnityEngine.RectTransform","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.EventSystems.EventSystem","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","UnityEngine.CanvasRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Image","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.CanvasScaler","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.58f2";

Deserializers.productName = "AdGame2";

Deserializers.lunaInitializationTime = "02/05/2026 07:16:13";

Deserializers.lunaDaysRunning = "0.0";

Deserializers.lunaVersion = "7.0.0";

Deserializers.lunaSHA = "3bcc3e343f23b4c67e768a811a8d088c7f7adbc5";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "36757";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1839";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3085";

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

Deserializers.linearColorSpace = true;

Deserializers.buildID = "738e59b9-84b7-471e-898d-48df3cd08b18";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

