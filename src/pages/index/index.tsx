import { View, Text, Button } from '@tarojs/components'
import { useMealPicker } from '@/hooks/useMealPicker'
import './index.scss'

export default function Index() {
  const { meal, spinning, revealed, choose } = useMealPicker()

  return (
    <View className='page'>
      <View className='bg-shape bg-shape--1' />
      <View className='bg-shape bg-shape--2' />

      <View className='content'>
        <View className='header'>
          <View className='header-icon'>
            <Text className='header-icon-text'>🍽</Text>
          </View>
          <Text className='title'>今天吃什么</Text>
          <Text className='subtitle'>一键随机 · 告别选择困难</Text>
        </View>

        <View className='card'>
          <View className='intro'>
            <Text className='intro-text'>
              专为日常饮食选择设计。忙到没空想菜单时，交给随机推荐，轻松决定下一餐。
            </Text>
          </View>

          <View className='result-area'>
            {!meal && !spinning && (
              <Text className='result-placeholder'>准备好了吗？</Text>
            )}
            {meal && (
              <View
                className={`result ${spinning ? 'result--spinning' : ''} ${revealed ? 'result--revealed' : ''}`}
              >
                {revealed && <Text className='result-label'>今日推荐</Text>}
                <Text className='result-text' key={spinning ? meal : `final-${meal}`}>
                  {meal}
                </Text>
              </View>
            )}
          </View>

          <Button
            className={`btn ${spinning ? 'btn--loading' : ''}`}
            onClick={choose}
            disabled={spinning}
          >
            <Text className='btn-text'>{spinning ? '正在抽取' : '开始选择'}</Text>
            {spinning && (
              <View className='btn-dots'>
                <View className='btn-dot' />
                <View className='btn-dot' />
                <View className='btn-dot' />
              </View>
            )}
          </Button>
        </View>
      </View>
    </View>
  )
}
