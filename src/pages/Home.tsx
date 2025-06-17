import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const features = [
    { title: 'Upload Excel Files', description: 'Upload your Excel files directly (.xlsx, .xls, .csv) for instant chart creation' },
    { title: 'Download Charts', description: 'Export your charts as high-quality PNG, SVG files or share with direct links' },
    { title: 'Multiple Chart Types', description: 'Create 9 different chart types including bar, line, pie, radar, and advanced visualizations' }
  ];
  
  const chartTypes = [
    // 基础图表
    { 
      title: '📊 Bar Charts', 
      description: 'Perfect for comparing categories and showing discrete data values',
      category: 'Basic Charts',
      useCases: 'Sales comparison, survey results, categorical data'
    },
    { 
      title: '📈 Line Charts', 
      description: 'Ideal for showing trends, changes over time, and continuous data',
      category: 'Basic Charts',
      useCases: 'Time series, stock prices, temperature changes'
    },
    { 
      title: '📉 Area Charts', 
      description: 'Filled line charts that emphasize magnitude of change over time',
      category: 'Basic Charts',
      useCases: 'Revenue growth, population changes, cumulative data'
    },
    
    // 圆形图表
    { 
      title: '🥧 Pie Charts', 
      description: 'Show proportions and percentages of a whole dataset',
      category: 'Circular Charts',
      useCases: 'Market share, budget allocation, survey responses'
    },
    { 
      title: '🍩 Doughnut Charts', 
      description: 'Modern pie charts with center space for additional information',
      category: 'Circular Charts',
      useCases: 'Performance metrics, completion rates, resource usage'
    },
    { 
      title: '🎯 Polar Area Charts', 
      description: 'Circular bar charts that show data in a radial format',
      category: 'Circular Charts',
      useCases: 'Seasonal data, directional analysis, cyclic patterns'
    },
    
    // 高级图表
    { 
      title: '🕸️ Radar Charts', 
      description: 'Multi-dimensional data visualization for comparing multiple variables',
      category: 'Advanced Charts',
      useCases: 'Performance evaluation, skill assessment, product comparison'
    },
    { 
      title: '⚪ Scatter Plots', 
      description: 'Show correlation and relationships between two variables',
      category: 'Advanced Charts',
      useCases: 'Correlation analysis, outlier detection, regression analysis'
    },
    { 
      title: '🫧 Bubble Charts', 
      description: 'Three-dimensional data visualization with X, Y, and size dimensions',
      category: 'Advanced Charts',
      useCases: 'Risk vs return, market analysis, portfolio visualization'
    }
  ];
  
  return (
    <div className="space-y-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">Excel Chart Maker - Create Beautiful Charts from Excel Data</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">Transform your Excel data into stunning visualizations with our easy-to-use chart maker</p>
        <Link to="/chart-maker">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium">
            Start Creating Charts
          </button>
        </Link>
      </section>
      
      <section className="py-8">
        <h2 className="text-2xl font-bold text-center mb-8">Key Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
      
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Supported Chart Types</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Create professional charts from your Excel data with our comprehensive collection of visualization types. 
            Each chart type is optimized for different data scenarios and business needs.
          </p>
          
          {/* 按类别分组显示图表类型 */}
          <div className="space-y-12">
            {/* 基础图表 */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-center text-blue-600">📊 Basic Charts</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {chartTypes.filter(chart => chart.category === 'Basic Charts').map((chart, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-500">
                    <h4 className="text-lg font-semibold mb-3">{chart.title}</h4>
                    <p className="text-gray-600 mb-3">{chart.description}</p>
                    <div className="text-sm text-blue-600">
                      <b>Best for:</b> {chart.useCases}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 圆形图表 */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-center text-green-600">🎯 Circular Charts</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {chartTypes.filter(chart => chart.category === 'Circular Charts').map((chart, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-green-500">
                    <h4 className="text-lg font-semibold mb-3">{chart.title}</h4>
                    <p className="text-gray-600 mb-3">{chart.description}</p>
                    <div className="text-sm text-green-600">
                      <b>Best for:</b> {chart.useCases}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 高级图表 */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-center text-purple-600">🚀 Advanced Charts</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {chartTypes.filter(chart => chart.category === 'Advanced Charts').map((chart, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-purple-500">
                    <h4 className="text-lg font-semibold mb-3">{chart.title}</h4>
                    <p className="text-gray-600 mb-3">{chart.description}</p>
                    <div className="text-sm text-purple-600">
                      <b>Best for:</b> {chart.useCases}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 功能特色 */}
          <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-6 text-center">Chart Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-2">🎨</div>
                <h4 className="font-medium mb-2">Custom Colors</h4>
                <p className="text-sm text-gray-600">Professional color palettes and custom styling options</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">📱</div>
                <h4 className="font-medium mb-2">Responsive Design</h4>
                <p className="text-sm text-gray-600">Charts adapt perfectly to all screen sizes and devices</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">💾</div>
                <h4 className="font-medium mb-2">Export Options</h4>
                <p className="text-sm text-gray-600">Download as PNG, SVG, or share with direct links</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">⚡</div>
                <h4 className="font-medium mb-2">Real-time Preview</h4>
                <p className="text-sm text-gray-600">See changes instantly as you modify your data</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 使用指南 */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">How to Create Charts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📤</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">1. Upload Your Data</h3>
              <p className="text-gray-600">
                Upload Excel files (.xlsx, .xls) or CSV files. Our system automatically detects columns and data types for optimal chart creation.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">2. Choose Chart Type</h3>
              <p className="text-gray-600">
                Select from 9 different chart types. Each type is designed for specific data scenarios with helpful descriptions and use cases.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">3. Customize & Export</h3>
              <p className="text-gray-600">
                Adjust colors, titles, and settings. Export your charts as PNG, SVG, or share them with direct links for presentations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO优化的额外内容 */}
      <section className="py-8 bg-blue-50 rounded-lg">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Professional Excel Chart Maker</h2>
          <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Transform your Excel spreadsheet data into professional, interactive charts with our free online Excel chart maker. 
            Whether you need to create bar charts for sales data, line charts for trends, pie charts for proportions, or advanced 
            visualizations like radar charts and bubble charts, our tool makes it simple and fast. Perfect for business presentations, 
            data analysis, reports, and academic projects. No software installation required - create beautiful charts directly in your browser.
          </p>
          <div className="mt-6">
            <Link to="/chart-maker">
              <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium">
                Try Excel Chart Maker Now
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 